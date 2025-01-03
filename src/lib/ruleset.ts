import { Piece } from "$lib/piece/piece-state.svelte"

// These letters and numbers define the 8x8 board.
export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// There are two players, defined by the color of their pieces.
export type Player = "white" | "black"

// These are the roles that each piece can be.
export type Role = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn"

// The board is 8x8 and these are the allowed indices.
export type Index = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

// A position on the board.
export interface Position {
	row: Index
	col: Index
}

// Takes in all pieces and a selected piece 
// and returns all positions where the selected piece could move.
export function calculateMoveset(pieces: Piece[], selected: Piece): Position[] {
	let { row, col } = selected.pos

	if (selected.player === "white") {

		return [{ row: row - 1 as Index, col }]
	} else {
		return [{ row: row + 1 as Index, col }]
	}
}
