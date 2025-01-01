type Role = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn"

export interface Piece {
	role: Role
	color: "black" | "white"
}
