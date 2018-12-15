<template>
    <div class="product-item-wrap">
        <div class="product-item-head">
            <div>
                <img :src="'../../static/products/' + data.image" alt="">
            </div>
            <p><span>{{data.name}}</span></p>
            <PriceLabel :dataPrice="data.price" />
            <div v-if="type" class="btn-wrap">
                <button v-on:click="$store.dispatch('ADD_TO_CART', data)" class="btn-basket">KOSZYK</button><button v-on:click="$store.dispatch('ADD_TO_WISHLIST', data)" class="btn-wishlist">WISHLISTA</button>
            </div>
            <div v-if="cartBtn" class="btn-wrap">
                <button v-on:click="$store.dispatch('REMOVE_FROM_CART', data.sku)" class="btn-basket btn-basket-remove">USUN z KOSZYKA</button>
            </div>
            <div v-if="wishlistBtn" class="btn-wrap">
                <button v-on:click="$store.dispatch('REMOVE_FROM_WISHLIST', data.sku)" class="btn-wishlist btn-wishlist-remove">USUN z WISHLISTY</button>
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
        props: ['data', 'type', 'cartBtn', 'wishlistBtn'],
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
    .btn-basket-remove {
        width: 100%;
    }
    .btn-wishlist-remove {
        width: 100%;
    }
</style>
