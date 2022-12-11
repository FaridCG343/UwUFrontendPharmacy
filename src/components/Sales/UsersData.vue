<template>
    <div class="login">
        <h1>Registro de nuevo cliente</h1>
        <label for="fname">Card Code:</label>
        <input type="text" id="fname" name="fname"><br><br>

        <input type="submit" value="Submit">
    </div>

    <div class="registerUser">
        <form>
            <h1>Registro de nuevo cliente</h1>
            <label for="fname">Nombre Completo:</label>
            <input type="text" id="fname" name="fname"><br><br>

            <label for="lname">Correo:</label>
            <input type="text" id="lname" name="lname"><br><br>

            <label for="lname">Telefono:</label>
            <input type="text" id="lname" name="lname"><br><br>

            <label for="lname">Direccion:</label>
            <input type="text" id="lname" name="lname"><br><br>

            <input type="submit" value="Submit">
        </form>
    </div>

    <div class="registeredUser">
        <h1>Hamlet Solano Diaz</h1>
        <h2>hamletsolanod@gmail.com</h2>
        <h2>656 2227106</h2>
        <h2>region de livorno 1305</h2>
    </div>
    <paymentComponent />

</template>


<script>
import paymentComponent from "./paymentComponent.vue"

export default {

    name: 'productCardList',
    components: {
        paymentComponent,
    },
    props: {
    },
    data() {
        return {
            // data
        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
    padding: 10px;
}
</style>
