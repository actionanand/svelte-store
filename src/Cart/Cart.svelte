<script>
  import { onDestroy } from 'svelte';

  import cartItems from './cart-store';

  import CartItem from './CartItem.svelte';

  import { timer } from '../timer-store.js';

  let items;

  const unsub = cartItems.subscribe(myItems => {
    items = myItems;
  });

  onDestroy(() => {
    if(unsub) {
      unsub();
    }
  });
  
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<section>
  <h1>Cart</h1>
  <ul>
    <!-- subcription at html level, prepend with '$' -->
    <!-- {#each $cartItems as item (item.id)} -->
    {#each items as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
  <h3>Timer : {$timer}</h3>
</section>
