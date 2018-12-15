<template>
    <div class="product-item-wrap">
        <div class="product-item-head">
            <div>
                <img :src="'../../static/products/' + data.image" alt="">
            </div>
            <p><span>{{data.name}}</span></p>
            <PriceLabel :dataPrice="data.price" />
            <div>
                <button>KOSZYK</button>
                <button>WISHLISTA</button>
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
        props: ['data'],
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
</style>
