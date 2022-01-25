import { writable } from "svelte/store";

let items = [
  {
    id: "p3",
    title: "Test",
    price: 9.99
  },
  {
    id: "p4",
    title: "Test",
    price: 9.99
  }
];

function createCart() {
  const cart = writable(items);

  return {
    subscribe: cart.subscribe,
    addItem: (itemToBeAdded) => {
      cart.update((itemsOfCart) => {
        if (itemsOfCart.find(i => i.id === itemToBeAdded.id)) {
          return [...itemsOfCart];
        }
        return [...itemsOfCart, itemToBeAdded];
      });
    },
    removeItem: (id) => {
      cart.update((items) => {
        return items.filter((item) => item.id !== id);
      });
    }
  };
}


export default createCart();