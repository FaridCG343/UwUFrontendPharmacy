<template>
    <div class="login">
        <h1>Iniciar cliente</h1>
        <label for="fname">Card Code:</label>
        <input type="text" id="fname" name="fname"><br><br>

        <input type="submit" value="Submit">
    </div>

    <div class="registerUser">
        <h1>Registro cliente</h1>
        <input type="text" v-model="nombre" placeholder="Nombre*" required>
        <input type="text" v-model="apellidos" placeholder="Apellidos*" required>
        <input type="email" v-model="correo" placeholder="Email*" required>
        <input type="text" v-model="telefono" placeholder="Telefono*" required>
        <input type="text" v-model="direccion" placeholder="Direccion">
        <button @click="register">Registrar</button>
    </div>

    <div class="modifyUser">
        <form>
            <h1>Modificar de nuevo cliente</h1>
            <label for="fname">Card Code:</label>
            <input type="text" id="fname" name="fname"><br><br>


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
        <h1>{{ nombre }}</h1>
        <h2>{{ correo }}</h2>
        <h2>{{ telefono }}</h2>
        <h2>{{ direccion }}</h2>
    </div>
    <paymentComponent />

</template>


<script>
import paymentComponent from "./paymentComponent.vue"
import API from "@/axioshelper"
import { token } from "@/token"

export default {

    name: 'productCardList',
    components: {
        paymentComponent,
    },
    props: {
    },
    data() {
        return {
            nombre: '',
            apellidos: "",
            telefono: "",
            direccion: null,
            correo: "",
            card_id: null,
        }
    },
    methods: {
        async register() {
            let request = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                telefono: this.telefono,
                correo: this.correo,
                direccion: this.direccion
            }
            let response = await API.post('client/affiliate', request, token)
            if (response.status == 200) {
                alert(response.message + "\n" + "Numero de tarjeta" + response.numTarjeta)
            }
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
    padding: 10px;
}
</style>
