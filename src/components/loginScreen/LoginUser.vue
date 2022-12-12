/* eslint-disable */
<template>
    <div>
        <input type="text" v-model="username" placeholder="Usuario">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click="login(username, password)">Iniciar Sesion</button>
    </div>
</template>

<script>
import API from '@/axioshelper';
import { setToken } from '@/token';

export default {
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async login(usr, pass) {
            let response = await API.post("login", { username: usr, password: pass })
            if (response.status == 200) {
                document.cookie = 'token_c=' + response.token + "; SameSite=None; Secure"
                setToken(response.token)
                alert("Bienvenido uwu")
                this.username = ""
                this.password = ''
                this.$emit("gettoken")
                this.$router.push("/")
            }

        }
    }
}
</script>

<style scoped>

</style>