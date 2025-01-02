import { setContext, getContext } from "svelte"
import type { Position, Index } from "$lib/ruleset"

export type Status = "selectable" | "selected" | "not-selectable" | "not-selected"
type Color = "light" | "dark"

// A File is a "square" on the board.
export class File {
	pos: Position

	status: Status = $state("not-selectable")

	constructor(pos: Position) {
		this.pos = pos
	}

	get color(): Color {
		return (this.pos.row + this.pos.col) % 2 === 0 ? "light" : "dark"
	}

	onclick() {
		console.log(`Clicked ${this.pos.row}, ${this.pos.col}`)
	}
}

export function createFileState(pos: Position) {
	return setContext(Symbol(`${pos.row}-${pos.col}`), new File(pos))
}

export function getFileState(pos: Position) {
	return getContext<ReturnType<typeof createFileState>>(Symbol(`${pos.row}-${pos.col}`))
}

export function createAllFiles() {
	return Array.from({ length: 8 }, (_, row) => Array.from({ length: 8 }, (_, col) => createFileState({ row: row as Index, col: col as Index })))
}
