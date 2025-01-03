
import { setContext, getContext } from "svelte"
import { type Role, type Player, type Position } from "$lib/ruleset"

export class Piece {
	role: Role
	player: Player

	pos: Position = $state({ row: 0, col: 0 })
	offBoard: boolean = $state(true)

	constructor(role: Role, player: Player, pos: Position) {
		this.role = role
		this.player = player
		this.pos = pos
		this.offBoard = false
	}
}


export function createPieceState(role: Role, player: Player, pos: Position) {
	return setContext(Symbol(`${role}-${player}`), new Piece(role, player, pos))
}

export function getPieceState(role: Role, player: Player) {
	return getContext<ReturnType<typeof createPieceState>>(Symbol(`${role}-${player}`))
}

export function createDefaultPieces() {
	return [
		createPieceState("rook", "black", { row: 0, col: 0 }),
		createPieceState("knight", "black", { row: 0, col: 1 }),
		createPieceState("bishop", "black", { row: 0, col: 2 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("queen", "black", { row: 0, col: 4 }),
		createPieceState("bishop", "black", { row: 0, col: 5 }),
		createPieceState("knight", "black", { row: 0, col: 6 }),
		createPieceState("rook", "black", { row: 0, col: 7 }),

		createPieceState("pawn", "black", { row: 1, col: 0 }),
		createPieceState("pawn", "black", { row: 1, col: 1 }),
		createPieceState("pawn", "black", { row: 1, col: 2 }),
		createPieceState("pawn", "black", { row: 1, col: 3 }),
		createPieceState("pawn", "black", { row: 1, col: 4 }),
		createPieceState("pawn", "black", { row: 1, col: 5 }),
		createPieceState("pawn", "black", { row: 1, col: 6 }),
		createPieceState("pawn", "black", { row: 1, col: 7 }),

		createPieceState("pawn", "white", { row: 6, col: 0 }),
		createPieceState("pawn", "white", { row: 6, col: 1 }),
		createPieceState("pawn", "white", { row: 6, col: 2 }),
		createPieceState("pawn", "white", { row: 6, col: 3 }),
		createPieceState("pawn", "white", { row: 6, col: 4 }),
		createPieceState("pawn", "white", { row: 6, col: 5 }),
		createPieceState("pawn", "white", { row: 6, col: 6 }),
		createPieceState("pawn", "white", { row: 6, col: 7 }),

		createPieceState("rook", "white", { row: 7, col: 0 }),
		createPieceState("knight", "white", { row: 7, col: 1 }),
		createPieceState("bishop", "white", { row: 7, col: 2 }),
		createPieceState("king", "white", { row: 7, col: 3 }),
		createPieceState("queen", "white", { row: 7, col: 4 }),
		createPieceState("bishop", "white", { row: 7, col: 5 }),
		createPieceState("knight", "white", { row: 7, col: 6 }),
		createPieceState("rook", "white", { row: 7, col: 7 }),
	]
}
