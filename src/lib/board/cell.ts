import { letters } from "./board"

type CellColor = "light" | "dark"

export function cellColor(letter: string, num: number): CellColor {
	if ((colIndex(num) + rowIndex(letter, letters)) % 2 === 0) {
		return "light"
	}

	return "dark"
}

function rowIndex(letter: string, letters: string[]) {
	return letters.indexOf(letter)
}

function colIndex(num: number) {
	return num - 1
}
