<template>
    <div class="welcomePage" >
        <p>With this app you will be able to create a budget for the services you need to book</p>
        <router-link to="/Budget" class="startButton">Start Budget!</router-link> 
    </div>
</template>
<script>
export default {
    name:'Welcome',
}
</script>
<style scoped>

.welcomePage{
    background-color: lightcyan;
    padding:20px;
    display:flex;
    flex-direction: column;
    align-items: center;
}

.startButton{
    padding:1rem;
    font-size: 20px;
    background-color: orchid;
    /* border-radius: 30%; */
    border-color:orchid;
    border-style:solid;
    color:white;
    cursor:pointer;
    margin:5px;
    text-decoration: none;
    border-radius:15px;
}


</style>