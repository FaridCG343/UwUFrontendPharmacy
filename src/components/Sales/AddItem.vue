<template>
    <ul class="NewAdd">
        <li><input class="barcodeInput" /></li>

        <li class="addInput"><button class="AddButton">ADD</button></li>
    </ul>
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
    width: 100%;
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
