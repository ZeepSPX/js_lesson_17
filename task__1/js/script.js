// Задача 2. Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.----------------------------------------

class ServiceCar {
	constructor(driver, brand, number) {
		if (ServiceCar.instance) {
			return ServiceCar.instance
		}

		this.driver = driver
		this.brand = brand
		this.number = number

		ServiceCar.instance = this
	}

	getInfo() {
		return `Службове авто: марка - ${this.brand},номер - ${this.number},водій - ${this.driver}`
	}
}

const serviceCar = new ServiceCar('Максименко Анатолій Борисович', 'Toyota', 'ВС1234АА')
console.log(serviceCar.getInfo())

const anotherServiceCar = new ServiceCar('Петров Олег Леонідович', 'Land Rover', 'АВ4545ОК')
console.log(anotherServiceCar.getInfo())