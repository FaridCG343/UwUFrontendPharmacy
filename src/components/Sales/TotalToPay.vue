<template>

    <div class="footToPay">
        <b>Total a pagar:</b>
        <b>{{ toPay }}</b>

    </div>

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
            toPay: 0,

        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    height: 100%;
    width: 100%;
    background-color: white;
}

b {
    font-size: 25px;
    padding: 10px;
    background-color: white;
}

li {
    width: 30%;
    height: 100%;
    display: inline;
    line-height: 50%;
    padding: 10px;
    background-color: white;
}


.footToPay {
    display: inline;
    padding-top: 20px;

}
</style>
