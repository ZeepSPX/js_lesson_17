// Задача 4.Склад. База товарів, які зберігаються на складі: назва товару, одиниця виміру, кількість, фірма виробник (назва, реєстраційний номер). Організувати реєстрацію / відвантаження товарів, фільтрація за назвою товару, фільтрація за назвою фірми---------------------------------------------------------------------------------

class Product {
	constructor(name, unit, quantity, manufacturer) {
		this.name = name;
		this.unit = unit;
		this.quantity = quantity;
		this.manufacturer = manufacturer;
	}
}

class Warehouse {
	constructor() {
		this.products = [];
	}

	registerProduct(product) {
		this.products.push(product);
	}

	shipProduct(name, quantity) {
		const index = this.products.findIndex(p => p.name === name);
		if (index !== -1 && this.products[index].quantity >= quantity) {
			this.products[index].quantity -= quantity;
			return true;
		}
		return false;
	}

	filterByName(name) {
		return this.products.filter(p => p.name === name);
	}

	filterByManufacturer(manufacturer) {
		return this.products.filter(p => p.manufacturer.name === manufacturer);
	}
}

// Приклад використання
const warehouse = new Warehouse();

// Реєстрація товарів
const apple = new Product("Яблука", "кг", 100, { name: "Apple Inc.", registrationNumber: "12345" });
const orange = new Product("Апельсини", "кг", 50, { name: "Orange Inc.", registrationNumber: "67890" });
const banana = new Product("Банани", "шт", 200, { name: "Banana Inc.", registrationNumber: "54321" });
warehouse.registerProduct(apple);
warehouse.registerProduct(orange);
warehouse.registerProduct(banana);

// Фільтрація за назвою товару
console.log(warehouse.filterByName("Яблука"));

// Фільтрація за назвою фірми виробника
console.log(warehouse.filterByManufacturer("Orange Inc."));

// Відвантаження товарів
console.log(warehouse.shipProduct("Апельсини", 30));
console.log(warehouse.shipProduct("Банани", 300));



