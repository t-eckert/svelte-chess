import { setContext, getContext } from "svelte"
import type { Piece } from "$lib/piece/piece"
import { type CellState } from "$lib/cell/cell"
import type { Position } from "./board"

type Player = "white" | "black"

class BoardState {
	#currentPlayer: Player = $state("white")
	#board: Array<Array<CellState>> = $state(new Array(8).fill({ status: "not-selectable" }).map(() => new Array(8).fill({ status: "not-selectable" })))

	constructor() {
		// Set the initial state
		this.#resetBoard()
	}

	cell(pos: Position) {
		return this.#board[pos.row][pos.col]
	}

	endTurn() {
		if (this.#currentPlayer === "white") {
			this.#currentPlayer = "black"
		} else if (this.#currentPlayer === "black") {
			this.#currentPlayer = "white"
		}
	}

	#setPiece(pos: Position, piece: Piece) {
		this.#board[pos.row][pos.col] = { ...this.#board[pos.row][pos.col], piece }
	}

	#resetBoard() {
		this.#clearPieces()
		this.#setPiece({ row: 0, col: 0 }, { color: "black", role: "rook" })
	}

	#clearPieces() {
		this.#board = new Array(8).fill({ status: "not-selectable" }).map(() => new Array(8).fill({ status: "not-selectable" }))
	}
}


const BOARD_STATE_KEY = Symbol("BOARD")

export function createBoardState() {
	return setContext(BOARD_STATE_KEY, new BoardState())
}

export function getBoardState() {
	return getContext<ReturnType<typeof createBoardState>>(BOARD_STATE_KEY)
}
