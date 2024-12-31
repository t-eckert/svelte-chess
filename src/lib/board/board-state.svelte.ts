import { setContext, getContext } from "svelte"

class BoardState {

}


const BOARD_STATE_KEY = Symbol("BOARD")

export function createBoard() {
	return setContext(BOARD_STATE_KEY, new BoardState())
}

export function board() {
	return getContext<ReturnType<typeof createBoard>>(BOARD_STATE_KEY)
}
