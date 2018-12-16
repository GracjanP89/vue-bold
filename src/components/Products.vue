<template>
    <div class="products-wrap">
        <ProducsLabels :label="'Products'"/>
        <ProductItem v-for="product in products" :data="product" :productBtn="true" :key="product['.key']" />
    </div>
</template>

<script>
    import {db} from '../service/firebase'
    import ProductItem from './ProductItem'
    import ProducsLabels from './ProductsLabels'

    export default {
        name: 'Firebase',
        firebase: {
            products: db.ref('products')
        },
        components: {
            ProductItem,
            ProducsLabels
        }
    }
</script>

<style scoped>
    .products-wrap {
        display: flex;
        width: 100%;
        overflow: auto;
        position: relative;
    }
</style>
