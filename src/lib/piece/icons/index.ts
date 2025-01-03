import BishopBlack from "./bishop-black.svelte"
import KingBlack from "./king-black.svelte"
import KnightBlack from "./knight-black.svelte"
import PawnBlack from "./pawn-black.svelte"
import QueenBlack from "./queen-black.svelte"
import RookBlack from "./rook-black.svelte"
import BishopWhite from "./bishop-white.svelte"
import KingWhite from "./king-white.svelte"
import KnightWhite from "./knight-white.svelte"
import PawnWhite from "./pawn-white.svelte"
import QueenWhite from "./queen-white.svelte"
import RookWhite from "./rook-white.svelte"

export default new Map([
	["bishop-black", BishopBlack],
	["king-black", KingBlack],
	["knight-black", KnightBlack],
	["pawn-black", PawnBlack],
	["queen-black", QueenBlack],
	["rook-black", RookBlack],
	["bishop-white", BishopWhite],
	["king-white", KingWhite],
	["knight-white", KnightWhite],
	["pawn-white", PawnWhite],
	["queen-white", QueenWhite],
	["rook-white", RookWhite],
])
