<template>
    <div class="cardBody">


        <div class="Product">
            <p><b>{{ barcode }}</b>.........<b>54$</b></p>
            <p><b>promocion</b></p>


        </div>



        <div class="rightAligment">
            <ul>
                <li>
                    <button>-</button>
                </li>

                <li><input type="number" /></li>

                <li>
                    <button>+</button>
                </li>

                <li><button class="delete">X</button></li>
            </ul>
        </div>









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
    display: inline;

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

.rightAligment {
    float: right;
    width: 40%;

}

.Product {
    float: left;
    line-height: 5%;
    width: 40%;
}
</style>
