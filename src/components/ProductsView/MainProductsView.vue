<template>
    <div v-for="(bar, index)  in barcodes" v-bind:key="bar" class="producto">
        <div class="cardBody">
            <div class="Product">
                <p><b>{{ bar.id }}</b>.........<b>{{ bar.available_products }}$</b></p>
                <p><b>{{ bar.id }}</b>.........<b>{{ bar.description }}$</b></p>
                <p><b>{{ bar.promotion }}</b></p>
            </div>
            <div class="rightAligment">
                <ul>
                    <li>
                        <p disabled>{{ bar.quantity }}</p>
                    </li>
                    <li>
                        <button @click="deleteB(index)">X</button>
                    </li>
                </ul>
            </div>

        </div>


    </div>
</template>

<script>
import API from "@/axioshelper";
import { token } from "@/token";


export default {

    name: 'productCardList',
    components: {
    },
    props: {
        barcode: String,
    },
    data() {
        return {
            barcodes: [],
        }
    },
    async created() {
        let response = await API.get("product/list", null, token);
        console.log(response);
        if (response.status == 200) {
            this.barcodes = response;

        }



    }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.producto {
    width: 50%;
    display: inline;

}

.rightAligment {
    float: right;
    width: 40%;
}

.Product {
    float: left;
    line-height: 5%;
    width: 40%;
}

ul {
    display: inline;
    float: right;
    background-color: white;
}

li {
    display: inline;
    margin: 10px;
    background-color: white;
}
</style>
