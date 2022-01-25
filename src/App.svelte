<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";

  export let appName;
</script>

<style>
  .header-wrap {
    display: flex;
    justify-content: center;
  }

  .capitalize-it {
    text-transform: capitalize;
    color: #cf0056;
    font-weight: bold;
  }
</style>

<div class="header-wrap">
  <h1 class="capitalize-it">{appName}</h1>
</div>

<Cart />
<Products />
