<template>
    <div>
        <RouterLink to="/user/register" v-slot="{ register }">
            <button @click="register" role="link">Register user</button>
        </RouterLink>
        <RouterLink to="/user/update" v-slot="{ update }">
            <button @click="update" role="link">Change password</button>
        </RouterLink>
    </div>
</template>

<script>

</script>

<style scoped>

</style>