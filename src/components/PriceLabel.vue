<template>
    <div class="price-container" v-bind:class="[dataPrice.type == 'special' ? 'special' : '']">
        <span class="price-value">{{dataPrice.value}}</span>
        <span class="old-price">{{dataPrice.old ? dataPrice.old : ''}}</span>
    </div>
</template>

<script>
    export default {
        name: 'PriceLabel',
        props: ['dataPrice']
    }
</script>

<style scoped>
    .price-container {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        min-height: 40px;
    }
    .special {
        background: yellowgreen;
    }
    .old-price {
        display: inline-block;
        margin-left: 10px;
        text-decoration: line-through;
        color: #000;
    }
</style>
