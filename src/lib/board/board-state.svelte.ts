import { setContext, getContext } from "svelte"
import { createAllFiles, createFileState } from "$lib/file/file-state.svelte"
import { type Position } from "$lib/ruleset"

// The Board holds all Files 
export class Board {
	files = createAllFiles()

	file(pos: Position) {
		return this.files[pos.row][pos.col]
	}
}

const BOARD_STATE_KEY = Symbol("BOARD")

export function createBoardState() {
	return setContext(BOARD_STATE_KEY, new Board())
}

export function getBoardState() {
	return getContext<ReturnType<typeof createBoardState>>(BOARD_STATE_KEY)
}
