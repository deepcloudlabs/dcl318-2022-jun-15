import BookItem from "@/model/basket";

const BasketModule = {
    state: () => ({
       items: []
    }),
    mutations: {
        addItem(state, book){
            for (let item of state.items){
                if (book.isbn === item.book.isbn){
                    item.incrementQuantity();
                    state.items = [... state.items];
                    return;
                }
            }
            state.items = [... state.items, new BookItem(book, 1)]
        },
        removeItem(state, itemToRemove){
            for (let item of state.items) {
                if (item.book.isbn === itemToRemove.book.isbn){
                    item.decrementQuantity();
                    state.items = state.items.filter(item => item.quantity !== 0);
                    return;
                }
            }
        }
    }, // synchronous
    actions: {}, // asynchronous
    getter:{}
}

export default  BasketModule;