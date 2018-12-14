<template>
    <div>
        <ProductItem v-for="product in products" :data="product" :key="product['.key']" />
    </div>
</template>

<script>
    import ProductItem from './ProductItem'
    import {db} from '../service/firebase'

    export default {
        name: 'Firebase',
        data () {
            return {
            }
        },
        firebase: {
            products: db.ref('products')
        },
        components: {
            ProductItem
        }
    }
</script>

<style scoped>

</style>
