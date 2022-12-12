<template>
    <div class="login" v-show="!clienteIniciado">
        <h1>Iniciar cliente</h1>
        <label for="fname">Card Code:</label>
        <input type="number" v-model="card_id"><br><br>
        <button @click="getData">Iniciar</button>
    </div>

    <div class="registerUser" v-show="!clienteIniciado">
        <h1>Registro cliente</h1>
        <input type="text" v-model="nombre" placeholder="Nombre*" required>
        <input type="text" v-model="apellidos" placeholder="Apellidos*" required>
        <input type="email" v-model="correo" placeholder="Email*" required>
        <input type="text" v-model="telefono" placeholder="Telefono*" required>
        <input type="text" v-model="direccion" placeholder="Direccion">
        <button @click="register">Registrar</button>
    </div>
    <div class="registeredUser" v-show="clienteIniciado && !update">
        <h1>{{ nombre + " " + apellidos }}</h1>
        <h2>{{ correo }}</h2>
        <h2>{{ telefono }}</h2>
        <h2>{{ direccion }}</h2>
        <button @click="setUpdate">Actualizar datos</button>
    </div>
    <div class="modifyUser" v-show="clienteIniciado && update">
        <div>
            <h1>Modificar de nuevo cliente</h1>

            <label for="fname">Nombre:</label>
            <input type="text" v-model="nombre"><br><br>

            <label for="fname">Apellido:</label>
            <input type="text" v-model="apellidos"><br><br>

            <label for="lname">Correo:</label>
            <input type="text" v-model="correo"><br><br>

            <label for="lname">Telefono:</label>
            <input type="text" v-model="telefono"><br><br>

            <label for="lname">Direccion:</label>
            <input type="text" v-model="direccion"><br><br>

            <button @click="updateData">Actualizar</button>
            <button @click="setUpdate">Cancel</button>
        </div>
    </div>

</template>


<script>
import API from "@/axioshelper"
import { token } from "@/token"

export default {

    name: 'productCardList',
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
            update: false,
            clienteIniciado: false
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
                this.card_id = response.numTarjeta
                this.clienteIniciado = true
                alert(response.message + "\n" + "Numero de tarjeta" + response.numTarjeta)
            }
        },
        async getData() {
            let response = await API.get("client/" + this.card_id, null, token)
            if (response.status == 200) {
                this.nombre = response.name
                this.apellidos = response.lastname
                this.telefono = response.phoneNumber
                this.correo = response.email
                this.direccion = response.direccion
                this.clienteIniciado = true
            }
        },
        setUpdate() {
            this.update = !this.update
        },
        async updateData() {
            let request = {
                nombre: this.nombre,
                apellidos: this.apellidos,
                telefono: this.telefono,
                correo: this.correo,
                direccion: this.direccion
            }
            let response = await API.put('client/update/' + this.card_id, request, token)
            if (response.status == 200) {
                this.update = false
            }
        },
        resetUserData() {
            this.nombre = ''
            this.apellidos = ""
            this.telefono = ""
            this.direccion = null
            this.correo = ""
            this.card_id = null
            this.update = false
            this.clienteIniciado = false
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
