<template>
  <div>
    <label> {{ labelText }}: </label>
    <button class="plus" @click="incrementValue">+</button>
    {{ value }}
    <button class="minus" @click="decrementValue">-</button>
    <b-button v-b-modal="modalId">
      <b-icon id="my-modal" icon="info-circle-fill"></b-icon>
    </b-button>
    <b-modal :id="modalId"  :hide-footer="true" :hide-header="true">{{ modalText }}</b-modal>
  </div>
</template>

<script>
export default {
  name: "NumericInput",
  props: {
    value: Number,
    labelText: String,
    modalId: String,
    modalText: String,
  },
  methods: {
    incrementValue() {
      this.$emit("onchange", (this.value ?? 1) + 1);
    },
    decrementValue() {
      const value = this.value ?? 1;
      this.$emit("onchange", value > 1 ? value - 1 : value);
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
button {
  background-color: violet;
  text-align: center;
  border: none;
  border-radius: 10%;
  color: white;
  width: 40px;
  height: 40px;
  padding: 2px 8px;
  margin: 5px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}

.plus:hover {
  background-color: thistle;
}

.minus:hover {
  background-color: thistle;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  width: 20px;
  border: none;
  text-align: center;
  padding: 10px;
}


</style>
