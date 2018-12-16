<template>
    <div class="products-wrap">
        <ProducsLabels v-if="GET_CART_LENGTH > 0" :label="'Cart'" />
        <ProductItem v-for="product in $store.state.cart" :data="product" :cartBtn="true" :key="product['.key']" />
    </div>
</template>

<script>
    import ProductItem from './ProductItem'
    import ProducsLabels from './ProductsLabels'

    export default {
        name: 'Cart',
        components: {
            ProductItem,
            ProducsLabels
        },
        computed: {
            GET_CART_LENGTH () {
                return this.$store.getters.GET_CART_LENGTH
            }
        }
    }
</script>

<style scoped>
    .page-title {
        position: absolute;
    }
    .products-wrap {
        display: flex;
        width: 100%;
        overflow: auto;
        position: relative;
    }
    .product-item-head {
        height: 100%;
    }
    .products-item-labels {
        min-width: 125px;
    }
    .product-labels {
        position: absolute;
        bottom: 21px;
    }
</style>
