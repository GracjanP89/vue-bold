<template>
    <div class="products-wrap">
        <div class="product-item-wrap">
            <div class="product-item-head">
                <div>
                </div>
                <p><span></span></p>
                <p><span></span></p>
                <div>
                    <div>browar</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <ProductItem v-for="product in products" :data="product" :productBtn="true" :key="product['.key']" />
    </div>
</template>

<script>
    import ProductItem from './ProductItem'
    import {db} from '../service/firebase'

    export default {
        name: 'Firebase',
        firebase: {
            products: db.ref('products')
        },
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
