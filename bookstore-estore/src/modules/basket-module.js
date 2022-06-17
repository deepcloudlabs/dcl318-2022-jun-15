import BookItem from "@/model/basket";

const BasketModule = {
    state: () => ({
       items: []
    }),
    mutations: {
        addItem(state, book){
            state.items.push(new BookItem(book, 1))
        }
    }, // synchronous
    actions: {}, // asynchronous
    getter:{}
}

export default  BasketModule;