<template>

    <table class="scrollpane" v-if="modificable">
        <tr v-for="(row, index) in productList" :key="index">
            <cardItem class="cardItem" :barcode="row" modificable="true" />
        </tr>
    </table>
    <table class="scrollpane" v-else>
        <tr v-for="(row, index) in productList" :key="index">
            <cardItem class="cardItem" :barcode="row" modificable="false" />
        </tr>
    </table>

</template>

<script>
import cardItem from './productCardList.vue';

export default {

    name: 'ProductList',
    components: {
        cardItem,
    },
    props: {
        modificable: Boolean,

    },

    data() {
        return {
            productList: ["Prueba1", "prueba2", "prueba2", "prueba2", "prueba2",
                "prueba2", "prueba2", "prueba2", "prueba2", "prueba2",],
        }
    },
    methods: {
        getProductList() {
            this.responseAvailable = false;
            fetch("https://jokes-database.p.rapidapi.com/", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "jokes-database.p.rapidapi.com",
                    "x-rapidapi-key": this.apiKey
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                })
                .then(response => {
                    this.result = response.body;
                    this.responseAvailable = true;
                })
                .catch(err => {
                    console.log(err);
                });
        }


    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    width: 100%;
}

table {
    width: 100%;
}

.cardItem {
    width: 100%;
}

.scrollpane {
    overflow-y: scroll;
}
</style>
