<template>
    <div class="panel">
        <NumericInput labelText="Nº de páginas" :value="pages" @onchange="$emit('onchangepages', $event, serviceIndex)" />
        <NumericInput labelText="Nº de Idiomas"  :value="languages" @onchange="$emit('onchangelanguages', $event, serviceIndex)" />
    </div>
</template>
<script>
import NumericInput from './NumericInput'

export default {
    name: 'Panell',
    props:{
        pages: Number,
        languages:Number,
        serviceIndex: Number,
    },
    components:{
        NumericInput
    }

}
</script>
<style scoped>

.panel {
    padding:15px;
    border-style:dotted;
    border-radius:15px;
    border-color:thistle;
}



</style>