// Задача 6.Дано два класи MultChecker (клас для перевірки таблиці множення - рандомно генеруються числа, які треба перемножати), AddChecker (клас для перевірки додавання - рандомно генеруються числа у заданому діапазоні, які треба додавати). Обидва класи надсилають результати тестування об'єкту класу Hystory, який зберігає історію тестування у масиві у вигляді об'єктів Приклад. testsList = [ { firstNum: 1, secondNum: 5, opration:’*’, userAnswer: 7, correctAnswer: 5}, { firstNum: 3, secondNum: 4, opration:’+’, userAnswer: 7, correctAnswer: 7}, ] Можна створити окремий клас TestData, який описує один такий тест і у якому будуть ці поля.  Розробити клас TestManager, який використовуючи ці класи за допомогою таймера періодично генерує якісь N задач(рандомно вибираємо, що опитувати: додавання чи множення) і проводить опитування.Результати тестування додаються в об’єкт History.Зробити так, щоб об'єкт такого класу можна було створити тільки один. Коли зроблено ці N задач вивести усю історію на екран.---------------------------------------------------------------------------------

class TestData {
	constructor(firstNum, secondNum, operation, userAnswer, correctAnswer) {
		this.firstNum = firstNum;
		this.secondNum = secondNum;
		this.operation = operation;
		this.userAnswer = userAnswer;
		this.correctAnswer = correctAnswer;
	}
}

class History {
	constructor() {
		this.testsList = [];
	}

	addTest(testData) {
		this.testsList.push(testData);
	}

	print() {
		console.log(this.testsList);
	}
}

class MultChecker {
	constructor() {
		this.firstNum = Math.floor(Math.random() * 10) + 1;
		this.secondNum = Math.floor(Math.random() * 10) + 1;
		this.operation = "*";
	}

	getCorrectAnswer() {
		return this.firstNum * this.secondNum;
	}
}

class AddChecker {
	constructor() {
		this.firstNum = Math.floor(Math.random() * 10) + 1;
		this.secondNum = Math.floor(Math.random() * 10) + 1;
		this.operation = "+";
	}

	getCorrectAnswer() {
		return this.firstNum + this.secondNum;
	}
}

class TestManager {
	constructor(numTests, interval) {
		if (TestManager.instance instanceof TestManager) {
			return TestManager.instance;
		}

		this.numTests = numTests;
		this.interval = interval;
		this.history = new History();
		this.timerId = setInterval(this.runTest.bind(this), this.interval);

		TestManager.instance = this;

	}

	runTest() {
		const checkerType = Math.floor(Math.random() * 2);
		let checker;

		if (checkerType === 0) {
			checker = new MultChecker();
		} else {
			checker = new AddChecker();
		}

		const correctAnswer = checker.getCorrectAnswer();
		const userAnswer = prompt(`${checker.firstNum} ${checker.operation} ${checker.secondNum} = ?`);
		const testData = new TestData(checker.firstNum, checker.secondNum, checker.operation, userAnswer, correctAnswer);

		this.history.addTest(testData);

		if (this.history.testsList.length === this.numTests) {
			clearInterval(this.timerId);
			this.history.print();
		}

	}
}

const testManager = new TestManager(10, 5000); // створення тест-менеджера, який буде генерувати 10 тестів кожні 30 секунд