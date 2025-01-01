import { type Piece } from "$lib/piece/piece"

export interface CellState {
	piece: Piece | null
	status: CellStatus
}

type CellStatus = "selectable" | "selected" | "not-selectable"
type CellColor = "light" | "dark"

export function cellColor(row: number, col: number): CellColor {
	if ((row + col) % 2 === 0) {
		return "light"
	}

	return "dark"
}

