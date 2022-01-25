import { writable } from "svelte/store";

let items = [
  {
    id: "p1",
    title: "Test",
    price: 9.99
  },
  {
    id: "p2",
    title: "Test",
    price: 9.99
  }
];

const cart = writable(items);

export default cart;