
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
		createPieceState("king", "black", { row: 0, col: 0 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
		createPieceState("king", "black", { row: 0, col: 3 }),
	]
}
