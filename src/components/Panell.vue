<template>
    <div class="panel">
        <NumericInput
            labelText="Nº de páginas"
            :value="pages"
            @onchange="$emit('onchangepages', $event)"
            modalId="paginas"
            modalText="En este componente debe indicar el núm de páginas que tendrá su sitio web"
        />
        <NumericInput 
            labelText="Nº de Idiomas"  
            :value="languages" 
            @onchange="$emit('onchangelanguages', $event)" 
            modalId="idiomas"
            modalText="En este componente debe indicar el núm de idiomas que tendrá su sitio web"
        />
      
    </div>
</template>
<script>
import NumericInput from './NumericInput'

export default {
    name: 'Panell',
    props:{
        pages: Number,
        languages:Number,
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