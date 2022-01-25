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

const cart = writable(items);

export default cart;