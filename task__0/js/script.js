// Задача 1. Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)-----------------------------

class ArrayOperations {
	static countPositive(arr) {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > 0) {
				count++
			}
		}
		return count
	}

	static countNegative(arr) {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < 0) {
				count++
			}
		}
		return count
	}

	static countOccurrences(arr, value) {
		let count = 0

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				count++
			}
		}
		return count
	}
}

const myArr = [1, -2, 3, 4, -5, -6, 4, 1]

console.log(ArrayOperations.countPositive(myArr))
console.log(ArrayOperations.countNegative(myArr))
console.log(ArrayOperations.countOccurrences(myArr, 4))


















