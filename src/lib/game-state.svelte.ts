import { setContext, getContext } from "svelte"
import type { Player, Position, Role } from "./ruleset";
import { createDefaultPieces, Piece } from "./piece/piece-state.svelte";
import { createAllSquares, type Status } from "./square/square-state.svelte";
import { calculateMoveset } from "./ruleset";

class GameState {
	#currentPlayer: Player = $state("white")
	#selectedPiece: Piece | null = $state(null)
	#pieces = $state(createDefaultPieces())
	#squares = $state(createAllSquares())

	constructor() {
		this.#resetGame()
	}

	// Gets a piece by its role, player, and index.
	piece(role: Role, player: Player, idx: number) {
		return this.#pieces.filter((piece) => piece.role === role && piece.player === player && piece.idx === idx).at(0)
	}

	// Gets a piece by its position.
	pieceAt({ row, col }: Position) {
		return this.#pieces.filter((piece) => piece.pos.col === col && piece.pos.row === row && !piece.inJail).at(0)
	}

	// Gets the state of a square by its position.
	square({ row, col }: Position) {
		return this.#squares[row][col]
	}

	// Selects a square at a given position.
	selectSquare(pos: Position) {
		this.#setStatusOfAllSquares("not-selectable")
		this.square(pos).status = "selected"
		if (this.#selectedPiece === null) {
			this.#selectedPiece = this.pieceAt(pos) || null
			if (this.#selectedPiece) {
				let allowedMoves = calculateMoveset(this.#pieces, this.#selectedPiece)
				allowedMoves.forEach(pos => {
					this.square(pos).status = "selectable"
				})
			}
		} else {
			let { role, player, idx } = this.#selectedPiece
			this.#movePiece(role, player, idx, pos)
			this.#endTurn()
		}
	}

	// Unselects a square at a given position.
	unselectSquare(pos: Position) {
		this.square(pos).status = "not-selected"
		this.#setPlayerPieceLocationsToSelectable(this.#currentPlayer)
		if (this.#selectedPiece) {
			this.#selectedPiece = null
		}
	}

	#endTurn() {
		if (this.#currentPlayer === "white") {
			this.#currentPlayer = "black"
		} else if (this.#currentPlayer === "black") {
			this.#currentPlayer = "white"
		}
		this.#setPlayerPieceLocationsToSelectable(this.#currentPlayer)
	}

	#movePiece(role: Role, player: Player, idx: number, to: Position) {
		let piece = this.piece(role, player, idx)
		if (piece) {
			piece.move(to)
		}
	}

	#setStatusOfAllSquares(status: Status) {
		this.#squares.forEach(row => row.forEach(square => square.status = status))
	}

	#getPiecesForPlayer(player: Player) {
		return this.#pieces.filter(piece => piece.player === player)
	}

	#setPlayerPieceLocationsToSelectable(player: Player) {
		const playerPieces = this.#getPiecesForPlayer(player)
		console.log(playerPieces)
		playerPieces.forEach(piece => {
			if (piece.inJail === false) {
				this.square(piece.pos).status = "selectable"
			}
		})
	}

	#resetGame() {
		this.#setStatusOfAllSquares("not-selectable")
		this.#currentPlayer = "white"
		this.#setPlayerPieceLocationsToSelectable(this.#currentPlayer)
	}
}


const GAME_STATE_KEY = Symbol("GAME_STATE")

export function createGameState() {
	return setContext(GAME_STATE_KEY, new GameState())
}

export function getGameState() {
	return getContext<ReturnType<typeof createGameState>>(GAME_STATE_KEY)
}


