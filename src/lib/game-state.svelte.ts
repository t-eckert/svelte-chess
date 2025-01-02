import { setContext, getContext } from "svelte"
import type { Player } from "./ruleset";
import { createBoardState } from "./board/board-state.svelte";

class GameState {
	#currentPlayer: Player = $state("white")
	board = createBoardState()

	constructor() {

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


