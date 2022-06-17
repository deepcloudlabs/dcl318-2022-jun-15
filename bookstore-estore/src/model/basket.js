export default class BookItem {
    constructor(book, quantity=1) {
        this.book = book;
        this.quantity = quantity;
        this.price = Number(quantity) * Number(book.price);
    }
}