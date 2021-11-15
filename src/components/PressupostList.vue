<template>
    <div class="list"  >
        <div>
            <b-form-input id="type-search" 
            type="search" 
            placeholder="Buscar presupuesto..."
            v-model="searchText"><label></label></b-form-input>
            <b-button-group vertical>
                <b-button @click="sortMode='sortByCost'">Ordenar por Coste</b-button>
                <b-button @click="sortMode='sortAlphabetically'">Ordenar A-Z</b-button>
                <b-button @click="sortMode=null, searchText=''">Reiniciar</b-button>
            </b-button-group>
        </div>
        <div :key="index" v-for="(budget, index) in computedList">
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
  data(){
      return{
          sortMode:null,
          searchText:"",
      }
  },
  computed:{
    computedList: function(){
      const budgetListCopy = this.budgetList.slice();
      if(this.sortMode==="sortByCost"){
        budgetListCopy.sort((a,b)=>(a.cost > b.cost) ? 1:-1)
      } else if(this.sortMode==="sortAlphabetically"){
        budgetListCopy.sort((a,b)=>(a.name > b.name)? 1: -1)
      }

      return budgetListCopy.filter((budget) =>
        budget.name.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },


    //       resetFilter(){
      
    //   console.log("hola")
    // },
    // sortAlphabetically(){
    //   this.savedBudgetList.sort((a,b)=>(a.name > b.name)? 1 :-1)
    // },
    // sortByCost(){
    //   this.savedBudgetList.sort((a,b)=>(a.cost > b.cost)? 1 :-1)
    // }, 
    // filterBySearch(){
    //   this.savedBudgetList.search(this.name)
    // }
  }

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

.form-control{
    margin-bottom:10px;
}

.btn-secondary{
    background-color: orchid;
    border-color:whitesmoke;
    border-radius: 5px;
}

</style>
