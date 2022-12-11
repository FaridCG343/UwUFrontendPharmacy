<template>
    <table>
        <tr>
            <th><button>10</button></th>
            <th><button>20</button></th>
            <th><button>50</button></th>
        </tr>
        <tr>
            <th><button>100</button></th>
            <th><button>200</button></th>
            <th><button>500</button></th>
        </tr>
    </table>
    <label>Otra Cantidad</label>
    <input type="number" />
    <button class="submitPay">Pagar</button>


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
