<template>
<div>
  <router-link to="/" class="backButton">Volver</router-link>
  <form id="formBox" @submit.prevent>
    <div class="formContent">
      <label>
        Presupuesto
        <input type="text">
      </label>
      <label>
        Cliente
        <input type="text">
      </label>
      <h3>¿Qué quieres hacer?</h3>
      <div :key="index" v-for="(service, index) in services">
        <label>
          <input class="checkbox" type="checkbox" v-bind:value="index" v-model="selection" />
          {{ service.text }}: {{ service.value }} €
        </label>
        <Panell
          v-if="selection.includes(index)"
          @onchangepages="updatePages"
          @onchangelanguages="updateLanguages"
          :service-index="index"
          :pages="pages[index]"
          :languages="languages[index]"
        />
      </div>
      <div>
        <h3>Total: {{ getTotal() }}</h3>
      </div>
      <input class="saveButton" type="submit" value="Guardar">
    </div>
    {{pages}}
  </form>
</div>
  
</template>

<script>
import Panell from "./Panell.vue";

export default {
  name: "Form",
  components: {
    Panell,
  },
  data() {
    return {
      selection: [], //array of service indexes
      services: [
        { text: "Página Web", value: 500 },
        { text: "Consultoría SEO", value: 300 },
        { text: "Campaña de Google Ads", value: 100 },
      ],
      pages: [],
      languages: [],
    };
  },
  methods: {
    getTotal() {
      let total = 0;
      // this.selection.forEach((service)=>{
      //   total += service.value
      // })

      this.selection.forEach((serviceIndex) => {
        total +=
          this.services[serviceIndex].value +
          (this.pages[serviceIndex] ?? 1) * // default value 1 so that we avoid multiplication with undefined
            (this.languages[serviceIndex] ?? 1) *
            30;
      });
      // for(let i=0; i< this.services.length; i++){
      //     total += this.selection.includes(i) ? this.services[i].value : 0;
      // }
      //   for(let i=0; i< this.selection.length; i++){
      //      total += this.services[this.selection[i]].value
      //   }
      return total;
    },
    updatePages(value, serviceIndex) {
      this.pages[serviceIndex] = parseInt(value);
      // console.log(arguments)
    },
    updateLanguages(value, serviceIndex) {
      this.languages[serviceIndex] = parseInt(value);
    },
  },
};
</script>
<style scoped>

div{
  display:flex;
  flex-direction: column;
}

#formBox {
  /* width: 100%; */
  display: flex;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 20px 50px;
  line-height: 1cm;
  margin-top: 10px;
  justify-content: center;
}

.checkbox {
  width: 20px;
  height: 20px;
}

.backButton {
  padding: 1rem;
  font-size: 20px;
  background-color: orchid;
  border-style: solid;
  color: white;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  border-radius:15px;
}

.saveButton{
  padding: 1rem;
  font-size: 20px;
  background-color: orchid;
  border-style: solid;
  border-color:whitesmoke;
  color: white;
  cursor: pointer;
  text-align: center;
  border-radius:15px;
}
</style>
