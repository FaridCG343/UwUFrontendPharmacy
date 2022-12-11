<template>
    <ul>
        <li>
            <b>Total a pagar:</b>
        </li>
        <li>
            <b>{{ toPay }}</b>
        </li>
        <li>
            <button class="AddButton">PAGAR</button>
        </li>
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
            toPay: 0,

        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
    height: 100%;
}

b {
    font-size: 25px;
}

li {
    width: 30%;
    height: 100%;
    display: inline;
    line-height: 50%;
    padding: 10px;
}

.AddButton {
    width: 100%;
    height: 100%;
}
</style>
