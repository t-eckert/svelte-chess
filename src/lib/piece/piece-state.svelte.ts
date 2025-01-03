
import { setContext, getContext } from "svelte"
import { type Role, type Player, type Position } from "$lib/ruleset"

export class Piece {
	role: Role
	player: Player
	idx: number

	inJail: boolean = $state(false)

	#pos: Position = $state({ row: 0, col: 0 })
	#moveCount = $state(0)

	constructor(role: Role, player: Player, idx: number, pos: Position) {
		this.role = role
		this.player = player
		this.idx = idx
		this.#pos = pos
	}

	move(to: Position) {
		this.#pos = to
		this.#moveCount += 1
	}

	get pos() {
		return this.#pos
	}
}


export function createPieceState(role: Role, player: Player, idx: number, pos: Position) {
	return setContext(Symbol(`${role}-${player}-${idx}`), new Piece(role, player, idx, pos))
}

export function getPieceState(role: Role, player: Player) {
	return getContext<ReturnType<typeof createPieceState>>(Symbol(`${role}-${player}`))
}

export function createDefaultPieces() {
	return [
		createPieceState("rook", "black", 1, { row: 0, col: 0 }),
		createPieceState("rook", "black", 2, { row: 0, col: 7 }),
		createPieceState("knight", "black", 1, { row: 0, col: 1 }),
		createPieceState("knight", "black", 2, { row: 0, col: 6 }),
		createPieceState("bishop", "black", 1, { row: 0, col: 2 }),
		createPieceState("bishop", "black", 2, { row: 0, col: 5 }),
		createPieceState("king", "black", 1, { row: 0, col: 3 }),
		createPieceState("queen", "black", 1, { row: 0, col: 4 }),

		createPieceState("pawn", "black", 1, { row: 1, col: 0 }),
		createPieceState("pawn", "black", 2, { row: 1, col: 1 }),
		createPieceState("pawn", "black", 3, { row: 1, col: 2 }),
		createPieceState("pawn", "black", 4, { row: 1, col: 3 }),
		createPieceState("pawn", "black", 5, { row: 1, col: 4 }),
		createPieceState("pawn", "black", 6, { row: 1, col: 5 }),
		createPieceState("pawn", "black", 7, { row: 1, col: 6 }),
		createPieceState("pawn", "black", 8, { row: 1, col: 7 }),

		createPieceState("pawn", "white", 1, { row: 6, col: 0 }),
		createPieceState("pawn", "white", 2, { row: 6, col: 1 }),
		createPieceState("pawn", "white", 3, { row: 6, col: 2 }),
		createPieceState("pawn", "white", 4, { row: 6, col: 3 }),
		createPieceState("pawn", "white", 5, { row: 6, col: 4 }),
		createPieceState("pawn", "white", 6, { row: 6, col: 5 }),
		createPieceState("pawn", "white", 7, { row: 6, col: 6 }),
		createPieceState("pawn", "white", 8, { row: 6, col: 7 }),

		createPieceState("rook", "white", 1, { row: 7, col: 0 }),
		createPieceState("rook", "white", 2, { row: 7, col: 7 }),
		createPieceState("knight", "white", 1, { row: 7, col: 1 }),
		createPieceState("knight", "white", 2, { row: 7, col: 6 }),
		createPieceState("bishop", "white", 1, { row: 7, col: 2 }),
		createPieceState("bishop", "white", 2, { row: 7, col: 5 }),
		createPieceState("king", "white", 1, { row: 7, col: 3 }),
		createPieceState("queen", "white", 1, { row: 7, col: 4 }),
	]
}
