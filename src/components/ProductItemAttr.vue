<template>
    <div class="product-desc">
        <div v-for="(attr, index) in changeTableToObj(dataAttr)" v-showAttr="{attr: attr, index: index, attributeMap: attributeMap}"></div>
    </div>
</template>

<script>
    import {db} from '../service/firebase'

    export default {
        name: 'ProductItemAttr',
        props: ['dataAttr'],
        directives: {
            showAttr: {
                inserted: function (el, binding) {
                    let attrPos = binding.value.attr.split('|'),
                        attrIndex = String(binding.value.index),
                        parseAttr = '',
                        attrValues

                    let checkExistOberveObject = setInterval(function () {
                        if (!(binding.value.attributeMap[attrIndex] === 'undefined')) {
                            attrValues = binding.value.attributeMap[attrIndex]['.value'].split('|')
                            attrPos.forEach(function (position) {
                                parseAttr += attrValues[position - 1]
                            })
                            el.innerHTML = parseAttr
                            clearInterval(checkExistOberveObject)
                        }
                    }, 50)
                }
            }
        },
        firebase: {
            attributeMap: db.ref('attributesIdValue')
        },
        methods: {
            changeTableToObj: function (table) {
                let obj = {}
                table.forEach(function (el, index) {
                    obj[index] = el
                })
                return obj
            }
        }
    }
</script>

<style scoped>

</style>
