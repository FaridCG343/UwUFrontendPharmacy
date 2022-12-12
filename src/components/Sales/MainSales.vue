<template>
    <div class="arriba">
        <div class="productos">
            <div v-for="(bar, index)  in barcodes" v-bind:key="bar" class="producto">
                <p>{{ bar.description }}</p>
                <p>{{ "$" + bar.price }}</p>
                <input type="number" v-model="bar.units" class="units" @change="calculatetotal">
                <button @click="deleteB(index)">X</button>
            </div>
        </div>
        <div class="usuario">
            <UsersData ref="userData"></UsersData>
        </div>
    </div>
    <div class="abajo">
        <div class="total">
            <div>
                <input type="number" v-model="barcode">
                <button @click="addBarcode">Añadir</button>
            </div>
            <div>
                <p>{{ "Total: " + total }}</p>
                <button @click="vender" v-show="total <= 0">Aplicar venta</button>
            </div>
        </div>

        <div class="pago">
            <paymentComponentVue ref="payment" />
        </div>
    </div>
</template>


<script>
import UsersData from "./UsersData.vue";
import paymentComponentVue from "./paymentComponent.vue";
import API from "@/axioshelper";
import { token } from "@/token";

export default {
    components: {
        UsersData,
        paymentComponentVue
    },
    data() {
        return {
            barcodes: [],
            barcode: null,
            total: 0,
        }
    },
    methods: {
        eliminarNegativos() {
            this.barcodes.forEach((value, index) => {
                if (value.units <= 0) {
                    this.barcodes.splice(index, 1)
                }
            })
        },
        async addBarcode() {
            this.eliminarNegativos()
            let encontrado = false
            this.barcodes.forEach((value) => {
                if (value.product_id == this.barcode) {
                    value.units++
                    encontrado = true
                }
            })
            if (!encontrado) {
                let response = await API.get("/product/" + this.barcode, null, token)
                if (response.status == 200) {
                    let info = {
                        description: response.description,
                        price: response.price,
                        product_id: response.id,
                        units: 1
                    }
                    this.barcodes.push(info)
                    console.log(this.barcodes)
                }
            }

            this.barcode = null
            this.calculatetotal()
        },
        deleteB(index) {
            this.barcodes.splice(index, 1)
            this.calculatetotal()
        },
        async calculatetotal() {
            this.eliminarNegativos()
            let card = this.$refs.userData.card_id

            let res = await API.post("transaction/quote", { card_id: card, products: this.barcodes }, token)
            console.log(res)
            this.total = res.total
        },
        restarTotal(value) {
            this.total -= value
        },
        async vender() {
            let card = this.$refs.userData.card_id
            let res = await API.post("transaction/sale", { card_id: card, products: this.barcodes }, token)
            if (res.status == 200) {

                this.$refs.userData.resetUserData()
                let str = ''
                this.barcodes.forEach((value) => {
                    str = str + value.description + "  $" + value.price + "  x" + value.units + "\nSubtotal: " + value.units * value.price + "\n"

                })
                alert(
                    "Numero de transaccion: " + res.transaction + "\n"
                    + str + "Total  $" + res.total + "\nCambio  $" + this.total
                );
                this.barcodes = []
                this.total = 0
            }
        }

    },
}
</script>


<style scoped>
.arriba {
    display: flex;
    height: 70vh;
    width: 100%;
}

.productos {
    width: 70%;
    height: 75vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;
    background-color: rgb(143, 255, 255);
}

.producto {
    display: flex;
}

.units {
    height: 50%;
    float: right;
}

.usuario {
    height: 100%;
    width: 30%;
    background-color: rgb(176, 255, 193);
}

.total {
    height: 100%;
    width: 70%;
    background-color: rgb(253, 226, 171);
}

.pago {
    height: 100%;
    width: 30%;
    background-color: rgb(255, 166, 215);
}

.abajo {
    display: flex;
    height: 25vh;
    width: 100%;
}
</style>