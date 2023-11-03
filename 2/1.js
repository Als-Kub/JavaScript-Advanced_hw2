"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];

  constructor(bookList) {
    const uniqueBooks = new Set(bookList);
    if (uniqueBooks.size !== bookList.length) {
      throw Error("Дубликаты в начальном списке книг");
    } else {
      this.#books = bookList;
    }
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw Error("Книга с таким названием уже есть в списке");
    } else this.#books.push(title);
  }

  removeBook(title) {
    if (!this.hasBook(title)) {
      throw Error("Книги с таким названием нет в списке");
    } else {
      this.#books.splice(this.#books.indexOf(title), 1);
    }
  }

  get allBooks() {
    return this.#books;
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}
// const initialBooks = ["Title1", "Title2", "Title3", "Title4", "Title5", "Title2"]; // throw Error("Дубликаты в начальном списке книг")
const initialBooks = ["Title1", "Title2", "Title3", "Title4", "Title5"];

const library = new Library(initialBooks);
library.addBook("Title6");
// library.addBook("Title3"); // throw Error("Книга с таким названием уже есть в списке")
library.removeBook("Title2");
// library.removeBook("Title10"); // throw Error("Книги с таким названием нет в списке")
console.log(library.allBooks);
