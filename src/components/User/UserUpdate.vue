<template>

    <p>Message is: {{ men }}</p>
    <input v-model="men" placeholder="edit me" />
    <button @click="saludar(men)">Hola</button>
</template>


<script>
export default {
    methods: {
        saludar(men) {
            alert(men);
        }
    }
}
</script>

<style scoped>

</style>