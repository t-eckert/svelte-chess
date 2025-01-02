import { setContext, getContext } from "svelte"
import type { Player, Position, Role } from "./ruleset";
import { createBoardState } from "./board/board-state.svelte";
import { createDefaultPieces, Piece } from "./piece/piece-state.svelte";

class GameState {
	#currentPlayer: Player = $state("white")
	selectedPiece: Piece | null = $state(null)
	pieces = $state(createDefaultPieces())
	board = createBoardState()

	pieceAt({ row, col }: Position) {
		return this.pieces.filter((piece) => piece.pos.col === col && piece.pos.row === row).at(0)
	}

	movePiece(role: Role, player: Player, pos: Position) {
		console.log(`Requested to move ${player} ${role} to ${pos.row}, ${pos.col}`)

		let piece = this.pieces.filter((piece) => piece.role === role && piece.player === player).at(0)
		if (piece) {
			piece.pos = pos
		}
	}

	endTurn() {
		if (this.#currentPlayer === "white") {
			this.#currentPlayer = "black"
		} else if (this.#currentPlayer === "black") {
			this.#currentPlayer = "white"
		}
	}
}


const GAME_STATE_KEY = Symbol("GAME_STATE")

export function createGameState() {
	return setContext(GAME_STATE_KEY, new GameState())
}

export function getGameState() {
	return getContext<ReturnType<typeof createGameState>>(GAME_STATE_KEY)
}


