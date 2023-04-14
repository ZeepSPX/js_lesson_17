// Задача 3.Створити клас Нагадувач. Кожні вказані кількості секунд (використати setInterval) програма нагадує про якусь подію (це просто текст) і також виводиться порядковий номер скільки раз вже нагадування було. Зробити так, щоб неможна було зробити одночасно декілька об’єктів-нагадувачів. Методи зупинки таймера, метод зміни повідомлення без зупинки таймера.---------------------------------------------------------------------------------

class Reminder {
	static instance

	#message
	#counter
	#timer

	constructor(message, seconds) {
		if (Reminder.instance) {
			return Reminder.instance
		}

		Reminder.instance = this
		this.#message = message
		this.#counter = 0
		this.#timer = setInterval(() => {
			console.log(`${this.#message} (${++this.#counter})`);
		}, seconds * 1000)

	}

	setMessage(message) {
		this.#message = message
	}

	stop() {
		clearInterval(this.#timer);
		console.log("Таймер зупинено.")
	}
}

const reminder = new Reminder("Пора вставати зі стільця", 1) // нагадувати кожну хвилину про розім'яття
reminder.setMessage("Зроби перерву на каву!")
// reminder.stop()








