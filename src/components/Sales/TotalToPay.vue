<template>


    <ul class="NewAdd">
        <li><input class="barcodeInput" /></li>
        <li><button class="addInput">ADD</button></li>
    </ul>


    <div class="Total"></div>





</template>


<script>


export default {

    name: 'productCardList',
    components: {
    },
    props: {
        barcode: String,
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
.NewAdd {
    padding: 10px;
}

.Total {
    display: inline;
    padding: 10px;

}

li {
    display: inline;
}

.barcodeInput {
    width: 70%;
}

.addInput {
    width: 5%;

}
</style>
