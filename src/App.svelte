<script>
  import Cart from './Cart/Cart.svelte';
  import Products from './Products/Products.svelte';
  import Button from './UI/Button.svelte';

  export let appName;

  let showCart = true;
</script>

<style>
  .header-wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .capitalize-it {
    text-transform: capitalize;
    color: #cf0056;
    font-weight: bold;
  }
</style>

<div class="header-wrap">
  <h1 class="capitalize-it">{appName}</h1>
  <br>
  <div>
    <Button on:click="{() => showCart = !showCart}">Toggle Cart</Button>
  </div>
</div>

{#if showCart}
  <Cart />
{/if}
<Products />
