// Задача 5.Особиста бібліотека. Картотека домашньої бібліотеки: дані книги (автори (піб, рік народження, короткий опис), назва книги, жанр, видавництво (назва, реєстраційний номер, рік засування)). Реалізувати розділи бібліотеки (спеціальна література, хобі, домашнє господарство і т.д.), походження книги і наявність на даний час. Організувати додавання/вилучення книг та вибір книг за назвою, за ПІБ автора, за видавництвом.---------------------------------------------------------------------------------

class Book {
	constructor(title, author, genre, publisher) {
		this.title = title;
		this.author = author;
		this.genre = genre;
		this.publisher = publisher;
		this.origin = "Нова книга";
		this.available = true;
	}
}

class Author {
	constructor(name, birthYear, description) {
		this.name = name;
		this.birthYear = birthYear;
		this.description = description;
	}
}

class Publisher {
	constructor(name, registrationNumber, yearEstablished) {
		this.name = name;
		this.registrationNumber = registrationNumber;
		this.yearEstablished = yearEstablished;
	}
}

class Library {
	constructor() {
		this.books = [];
	}

	addBook(book) {
		this.books.push(book);
	}

	removeBook(bookTitle) {
		this.books = this.books.filter((book) => book.title !== bookTitle);
	}

	findBookByTitle(title) {
		return this.books.filter((book) => book.title === title);
	}

	findBooksByAuthor(authorName) {
		return this.books.filter((book) => book.author.name === authorName);
	}

	findBooksByPublisher(publisherName) {
		return this.books.filter((book) => book.publisher.name === publisherName);
	}

	borrowBook(bookTitle) {
		const book = this.books.find((book) => book.title === bookTitle);

		if (book && book.available) {
			book.origin = "Була взята в бібліотеці";
			book.available = false;
			console.log(`Книгу "${bookTitle}" взято з бібліотеки.`);
		} else if (book && !book.available) {
			console.log(`Книга "${bookTitle}" не доступна зараз.`);
		} else {
			console.log(`Книга "${bookTitle}" не знайдена.`);
		}
	}

	returnBook(bookTitle) {
		const book = this.books.find((book) => book.title === bookTitle);

		if (book && !book.available) {
			book.origin = "Повернена в бібліотеку";
			book.available = true;
			console.log(`Книгу "${bookTitle}" повернено в бібліотеку.`);
		} else if (book && book.available) {
			console.log(`Книга "${bookTitle}" вже знаходиться в бібліотеці.`);
		} else {
			console.log(`Книга "${bookTitle}" не знайдена.`);
		}
	}
}

// Створення об'єктів

const author1 = new Author("Стівен Кінг", 1947, "американський письменник");
const publisher1 = new Publisher("Терра", "UA1234", 1990);
const book1 = new Book("Містер Мерседес", author1, "роман", publisher1);

// Додавання книг до бібліотеки

const library = new Library();

library.addBook(book1);

// Пошук книг у бібліотеці

console.log(library.findBookByTitle("Містер Мерседес"));
console.log(library.findBooksByAuthor("Стівен Кінг"));
console.log(library.findBooksByPublisher("Терра"));

// Взяття книги з бібліотеки

library.borrowBook("Містер Мерседес");
library.borrowBook("Ігри Ендера");

// Повернення книг до бібліотеки

library.returnBook("Містер Мерседес");
library.returnBook("Ігри Ендера");

// Вилучення книг з бібліотеки

library.removeBook("Містер Мерседес");

// Додавання нової книги до бібліотеки

const author2 = new Author("Джордж Орвелл", 1903, "англійський письменник");
const publisher2 = new Publisher("Химера", "UA5678", 1950);
const book2 = new Book("1984", author2, "роман", publisher2);

library.addBook(book2)


