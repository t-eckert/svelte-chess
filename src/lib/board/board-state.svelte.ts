import { setContext, getContext } from "svelte"
import { createAllFiles, type Status } from "$lib/file/file-state.svelte"
import { type Position } from "$lib/ruleset"

// The Board holds all Files 
export class Board {
	#files = createAllFiles()

	file(pos: Position) {
		return this.#files[pos.row][pos.col]
	}

	selectFile(pos: Position) {
		this.setAllFileStatuses("not-selected")
		this.file(pos).status = "selected"
	}

	setAllFileStatuses(status: Status) {
		this.#files.map(row => row.map(file => file.status = status))
	}
}

const BOARD_STATE_KEY = Symbol("BOARD")

export function createBoardState() {
	return setContext(BOARD_STATE_KEY, new Board())
}

export function getBoardState() {
	return getContext<ReturnType<typeof createBoardState>>(BOARD_STATE_KEY)
}
