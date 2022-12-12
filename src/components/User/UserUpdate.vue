<template>

    <p>Message is: {{ men }}</p>
    <input v-model="men" placeholder="edit me" />
    <button @click="saludar(men)">Hola</button>
    <p>{{ saludar }}</p>
</template>


<script>
export default {
    data() {
        return {
            men: ""
        };
    },
    computed: {

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