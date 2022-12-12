<template>
    <table>
        <tr>
            <th><button @click="add(10)">10</button></th>
            <th><button @click="add(20)">20</button></th>
            <th><button @click="add(50)">50</button></th>
        </tr>
        <tr>
            <th><button @click="add(100)">100</button></th>
            <th><button @click="add(200)">200</button></th>
            <th><button @click="add(500)">500</button></th>
        </tr>
    </table>
    <label>Otra Cantidad</label>
    <input type="number" v-model="montoProcesar" />
    <button class="submitPay" @click="add(montoProcesar)">Pagar</button>


</template>


<script>


export default {

    name: 'paymentComponent',
    components: {
    },
    props: {
    },
    data() {
        return {
            montoProcesar: 0
        }
    },
    methods: {
        add(value) {
            this.$parent.restarTotal(value)
            this.montoProcesar = 0
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
    padding: 10px;
}

th {
    width: 5%;
}

tr {
    width: 100%;
}

button {
    width: 100%;
}

.submitPay {
    width: 10%;
    float: right;

}
</style>
