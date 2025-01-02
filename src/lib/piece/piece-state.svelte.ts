
import { setContext, getContext } from "svelte"
import { type Role, type Player, type Position } from "$lib/ruleset"

export class Piece {
	role: Role
	player: Player

	pos: Position | "off-board" = $state("off-board")

	constructor(role: Role, player: Player, pos: Position) {
		this.role = role
		this.player = player
		this.pos = pos
	}
}


export function createPieceState(role: Role, player: Player, pos: Position) {
	return setContext(Symbol(`${role}-${player}`), new Piece(role, player, pos))
}

export function getFileState(role: Role, player: Player) {
	return getContext<ReturnType<typeof createPieceState>>(Symbol(`${role}-${player}`))
}

export function createDefaultPieces() {

}
