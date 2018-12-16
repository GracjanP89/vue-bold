<template>
    <div class="product-item-wrap products-item-labels">
        <span class="page-title">{{label}}</span>
        <div class="product-item-head">
            <div>
            </div>
            <p><span></span></p>
            <p><span></span></p>
            <div class="product-labels">
                <div>Browar:</div>
                <div>Gatunek:</div>
                <div>Słód:</div>
                <div>Chmiel:</div>
                <div>Kraj pochodzenia:</div>
                <div>Smaki i zapachy</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductsLabels',
        props: ['label']
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
