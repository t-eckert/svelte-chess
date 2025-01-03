import { setContext, getContext } from "svelte"
import type { Position, Index } from "$lib/ruleset"

export type Status = "selectable" | "selected" | "not-selected" | "not-selectable"
type Color = "light" | "dark"

// A square on the board
export class Square {
	pos: Position

	status: Status = $state("not-selectable")

	constructor(pos: Position) {
		this.pos = pos
	}

	get color(): Color {
		return (this.pos.row + this.pos.col) % 2 === 0 ? "light" : "dark"
	}
}

function createSquareState(pos: Position) {
	return setContext(Symbol(`${pos.row}-${pos.col}`), new Square(pos))
}

export function getSquareState(pos: Position) {
	return getContext<ReturnType<typeof createSquareState>>(Symbol(`${pos.row}-${pos.col}`))
}

export function createAllSquares() {
	return Array.from({ length: 8 }, (_, row) => Array.from({ length: 8 }, (_, col) => createSquareState({ row: row as Index, col: col as Index })))
}
