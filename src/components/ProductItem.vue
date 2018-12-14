<template>
    <div class="product-item-wrap">
        <div class="product-item-head">
            <div>
                <img :src="'../../static/products/' + data.image" alt="">
            </div>
            <p><span>{{data.name}}</span></p>
            <p><span>{{data.price.value}}</span></p>
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
    export default {
        name: 'ProductItem',
        props: ['data'],
        components: {
            ProductItemAttr
        }
    }
</script>

<style scoped>

</style>
