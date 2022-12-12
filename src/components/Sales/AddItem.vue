<template>
    <ul class="NewAdd">
        <li><input class="barcodeInput" /></li>
        <li class="addInput"><button class="AddButton" id="add-product" @click="getProductList">Agregar</button></li>
    </ul>
</template>


<script>
import API from "@/axioshelper";


export default {

    name: 'productCardList',
    components: {
    },
    props: {
        barcode: String,
    },
    data() {
        return {
            responseAvailable: "",
            result: "",

        }
    },
    methods: {
        getProductList() {
            this.responseAvailable = API.get("product/1");
            console.log(this.responseAvailable);


        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    width: 100%;
}

.NewAdd {
    width: 100%;
    background-color: white;
    padding: 10px;
}

.Total {
    display: inline;
    padding: 10px;

}

li {
    width: 33%;
    display: inline;
}

.barcodeInput {
    width: 100%;
}

.addInput {
    padding-right: 6%;
    border-right: 10%;
    width: 30%;
    float: right;

}

.AddButton {
    width: 100%;
    float: right;
}
</style>
