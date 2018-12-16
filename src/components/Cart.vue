<template>
    <div class="products-wrap">
        <ProductItem v-for="product in $store.state.cart" :data="product" :cartBtn="true" :key="product['.key']" />
    </div>
</template>

<script>
    import ProductItem from './ProductItem'

    export default {
        name: 'Cart',
        components: {
            ProductItem
        }
    }
</script>

<style scoped>
    .products-wrap {
        display: flex;
        width: 100%;
        overflow: auto;
    }
</style>
