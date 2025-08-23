// open developer tool to check the output


class Library {
    constructor() {
        this.books = [];
    }
    addBooks(books) {
        this.books.push(...books);
    }

    listAllBooks() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author}`);
        });
    }

}

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.readStatus = false;
    }
    info() {
        console.log(`Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Read Status: ${this.readStatus ? 'Read' : 'Not Read'}`);

    }
}


let jhansi = new Library();

let b1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '978-3-16-148410-0');
let b2 = new Book('To Kill a Mockingbird', 'Harper Lee', '978-3-16-148410-0');
let b3 = new Book('Pride and Prejudice', 'Jane Austen', '978-3-16-148410-0');
let b4 = new Book('The Catcher in the Rye', 'J.D. Salinger', '978-3-16-148410-0');
let b5 = new Book('1984', 'George Orwell', '978-3-16-148410-0');
jhansi.addBooks([b1, b2, b3, b4, b5]);
