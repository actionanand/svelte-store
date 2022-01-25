import { writable } from "svelte/store";

const items = [
  {
    id: "p1",
    title: "A Book",
    price: 9.99,
    description: "A great book!"
  },
  {
    id: "p2",
    title: "A Carpet",
    price: 99.99,
    description: "Red and green."
  }
];

export const products = writable(items);
