<template>
    <div class="cardBody">
        <h1>{{ barcode }}</h1>
        <ul>
            <li>
                <button>-</button>
            </li>
            <li><input type="number" /></li>
            <li>
                <button>+</button>
            </li>

        </ul>
        <button class="delete">DELETE</button>


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
            // data
        }
    },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;

}

.cardBody {
    margin: 0 auto;
    width: 26%;

}

.counter {
    display: inline;
}

input {
    width: 30%;
}



li {
    display: inline;
    margin: 10px;
}

.delete {
    width: 100%;
    height: 100%;
}
</style>
