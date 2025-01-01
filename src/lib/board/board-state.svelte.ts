import { setContext, getContext } from "svelte"
import type { Piece } from "$lib/piece/piece"
import { type CellState } from "$lib/cell/cell"
import type { Position } from "./board"

type Player = "white" | "black"

class BoardState {
	#currentPlayer: Player = $state("white")
	#board: Array<Array<CellState>> = $state(new Array(8).fill(null).map(() => new Array(8).fill({ status: "not-selectable" })))

	constructor() {
		// Set the initial state
		this.#resetBoard()
		this.#setCurrentUserPiecesAsSelectable()
	}

	cell(pos: Position) {
		return this.#board[pos.row][pos.col]
	}

	selectCell(pos: Position) {
		this.#setAllCellsToNotSelectable()
		this.#setCellToSelected(pos)
	}

	unselectCell() {
		this.#setAllCellsToNotSelectable()
		this.#setCurrentUserPiecesAsSelectable()
	}

	endTurn() {
		if (this.#currentPlayer === "white") {
			this.#currentPlayer = "black"
		} else if (this.#currentPlayer === "black") {
			this.#currentPlayer = "white"
		}
	}

	endGame() {
		this.#resetBoard()
	}

	// Clear the board and reset all values back to the "new game" state.
	#resetBoard() {
		this.#clearBoard()
		this.#setPiece({ row: 0, col: 0 }, { color: "black", role: "rook" })
		this.#setPiece({ row: 0, col: 1 }, { color: "black", role: "knight" })
		this.#setPiece({ row: 0, col: 2 }, { color: "black", role: "bishop" })
		this.#setPiece({ row: 0, col: 3 }, { color: "black", role: "king" })
		this.#setPiece({ row: 0, col: 4 }, { color: "black", role: "queen" })
		this.#setPiece({ row: 0, col: 5 }, { color: "black", role: "bishop" })
		this.#setPiece({ row: 0, col: 6 }, { color: "black", role: "knight" })
		this.#setPiece({ row: 0, col: 7 }, { color: "black", role: "rook" })

		this.#setPiece({ row: 1, col: 0 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 1 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 2 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 3 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 4 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 5 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 6 }, { color: "black", role: "pawn" })
		this.#setPiece({ row: 1, col: 7 }, { color: "black", role: "pawn" })

		this.#setPiece({ row: 6, col: 0 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 1 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 2 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 3 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 4 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 5 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 6 }, { color: "white", role: "pawn" })
		this.#setPiece({ row: 6, col: 7 }, { color: "white", role: "pawn" })

		this.#setPiece({ row: 7, col: 0 }, { color: "white", role: "rook" })
		this.#setPiece({ row: 7, col: 1 }, { color: "white", role: "knight" })
		this.#setPiece({ row: 7, col: 2 }, { color: "white", role: "bishop" })
		this.#setPiece({ row: 7, col: 3 }, { color: "white", role: "king" })
		this.#setPiece({ row: 7, col: 4 }, { color: "white", role: "queen" })
		this.#setPiece({ row: 7, col: 5 }, { color: "white", role: "bishop" })
		this.#setPiece({ row: 7, col: 6 }, { color: "white", role: "knight" })
		this.#setPiece({ row: 7, col: 7 }, { color: "white", role: "rook" })
	}

	// Remove all pieces from the board.
	#clearBoard() {
		this.#board = new Array(8).fill(null).map(() => new Array(8).fill({ status: "not-selectable" }))
	}

	// Set the value of a piece at a given position.
	#setPiece(pos: Position, piece: Piece) {
		this.#board[pos.row][pos.col] = { ...this.#board[pos.row][pos.col], piece }
	}

	// Iterate over all cells and set them to selectable if they have a piece belonging to the current user.
	#setCurrentUserPiecesAsSelectable() {
		this.#board = this.#board.map((row) => row.map((cell) => {
			if (cell.piece?.color === this.#currentPlayer) {
				return { ...cell, status: "selectable" }
			}
			return cell
		}))
	}

	// Iterate over all cells and set them to not be selectable.
	#setAllCellsToNotSelectable() {
		this.#board = this.#board.map((row) => row.map((cell) => {
			return { ...cell, status: "not-selectable" }
		}))
	}

	// Set the cell to be selected.
	#setCellToSelected(position: Position) {
		this.#board[position.row][position.col] = { ...this.#board[position.row][position.col], status: "selected" }
	}
}


const BOARD_STATE_KEY = Symbol("BOARD")

export function createBoardState() {
	return setContext(BOARD_STATE_KEY, new BoardState())
}

export function getBoardState() {
	return getContext<ReturnType<typeof createBoardState>>(BOARD_STATE_KEY)
}
