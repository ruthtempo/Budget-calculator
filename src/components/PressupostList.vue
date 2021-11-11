<template>
    <div class="list"  >
        <div :key="index" v-for="(budget, index) in budgetList">
            <ul class="listElements">
                <li>Nombre del Presupuesto:{{budget.name}}</li>
                <li>Cliente:{{budget.client}}</li>
                <li>Coste:{{budget.cost}}</li>
            </ul>
            <b-button variant="danger" @click="$emit('onClickDelete', budget)">Eliminar</b-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "List",
  props:{
      budgetList:Array,
      
  },

};
</script>
<style scoped>
.list{
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: whitesmoke;
    padding:10px;
    border-radius:10px;
}

.listElements{
    display:flex;
    flex-direction: column;
    padding-top:20px;
}

.btn{
    width:100px;
    height:50px;
}

.btn-danger{
    background-color:rgb(253, 25, 25);
    border-color:rgb(253, 25, 25);
}


</style>
