<template>
<div>
    <label>
        {{labelText}}:
    </label>
    <button class="plus" @click="incrementValue()" >+</button>
    <input type="number" :value="value !== undefined ? value: 1" />
    <button class="minus" @click="decrementValue()" >-</button>
    <b-icon icon= "info-circle-fill" ></b-icon>

</div> 
    
</template>
<script>
export default {
    name:'NumericInput',
    props:{
        value:Number,
        labelText: String,
    },
    methods:{
        incrementValue(){
            this.$emit("onchange", (this.value ?? 1) + 1)
        },
        decrementValue(){
            const value = this.value ?? 1;
            this.$emit("onchange",  value > 1 ? value-1: value )
        }
    },
    data(){
        return{
            modalShow: false
        }
    }
}
</script>
<style scoped>

button{
    background-color:violet;
    text-align:center;
    border: none;
    border-radius: 10%;
    color:white;
    width:40px;
    height:40px;
    padding:2px 8px;
    margin:5px;
    text-align: center;
    font-size:18px;
    cursor:pointer;
}



.plus:hover{
    background-color: thistle;
}

.minus:hover{
    background-color: thistle;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
    }

input{
    width:20px;
    border:none;
    text-align:center;
    padding:10px;
}


</style>