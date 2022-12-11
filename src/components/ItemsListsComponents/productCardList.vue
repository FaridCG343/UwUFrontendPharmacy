<template>
    <div class="cardBody">

        <ul>
            <li>
                <h1>{{ barcode }}</h1>
            </li>
            <li>
                <button>-</button>
            </li>

            <li><input type="number" /></li>

            <li>
                <button>+</button>
            </li>

            <li><button class="delete">DELETE</button></li>
        </ul>


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
.cardBody {
    margin: 0 auto;
    width: 100%;

}

.counter {
    display: inline;
}

input {
    width: 100%;
}

ul {
    display: inline;
}


li {
    display: inline;
    margin: 10px;
}

.delete {
    width: 100%;
    height: 100%;
}

h1 {
    margin-right: 65vh;
}
</style>
