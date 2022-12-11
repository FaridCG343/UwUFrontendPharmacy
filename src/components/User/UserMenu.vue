<template>
    <div>
        <RouterLink to="/user/register" v-slot="{ registrar }">
            <button @click="registrar" role="link">Registrar Ususario</button>
        </RouterLink>

        <button>Cambiar contraseña</button>
    </div>
</template>

<script>

</script>

<style scoped>

</style>