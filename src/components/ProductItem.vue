<template>
    <div class="product-item-wrap">
        <div class="product-item-head">
            <div>
                <img :src="'../../static/products/' + data.image" alt="">
            </div>
            <p><span>{{data.name}}</span></p>
            <PriceLabel :dataPrice="data.price" />
            <div v-if="type" class="btn-wrap">
                <button v-on:click="$store.dispatch('ADD_REMOVE_TO_CART', data)" class="btn-basket">KOSZYK</button><button v-on:click="$store.dispatch('ADD_REMOVE_TO_WISHLIST', data)" class="btn-wishlist">WISHLISTA</button>
            </div>
            <ProductItemAttr :dataAttr="data.attributes" :key="data.sku" />
        </div>

    </div>
</template>

<script>
    import ProductItemAttr from './ProductItemAttr'
    import PriceLabel from './PriceLabel'

    export default {
        name: 'ProductItem',
        props: ['data', 'type'],
        components: {
            ProductItemAttr,
            PriceLabel
        }
    }
</script>

<style scoped>
    .product-item-wrap {
        min-width: 207px;
        margin-right: 25px;
    }
    .product-desc {
        min-height: 126px;
    }
    .btn-basket {
        min-height: 45px;
        background: #dc3545;
        display: inline-block;
        width: 49%;
        box-sizing: border-box;
        border-radius: 3px;
    }
    .btn-wishlist {
        min-height: 45px;
        background: #0069d9;
        display: inline-block;
        width: 49%;
        box-sizing: border-box;
        margin: 1%;
        border-radius: 3px;
    }
    .btn-wrap {
        margin: 5px 0;
    }
</style>
