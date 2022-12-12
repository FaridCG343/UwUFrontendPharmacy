<template>

    <p>Message is: {{ men }}</p>
    <input v-model="men" placeholder="edit me" />
    <button @click="saludar(men)">Hola</button>
</template>


<script>
export default {
    data() {
        return {
            men: ""
        };
    },
    methods: {
        saludar() {
            return "uwu";
        }

    }
}
</script>

<style scoped>

</style>