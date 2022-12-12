<template>
    <div class="container" style="display: flex; height: 100%; ">
        <div class="left">
            <div class="productListContainer">
                <ProductsList class="ProductsList" :modificable="true" />
            </div>
        </div>
        <div class="right">
            <div class="productListContainer">
                <UserData />
            </div>
        </div>
    </div>
    <div class="footPage">
        <AddItem />
        <TotalToPay />
    </div>

</template>

<script>
// import RightMainMenu from './RightMainMenu.vue'
import ProductsList from '../ItemsListsComponents/ProductsList.vue';
import AddItem from './AddItem.vue';
import TotalToPay from './TotalToPay.vue';
import UserData from './UsersData.vue';

export default {

    name: 'StartMenu',
    components: {
        // RightMainMenu,
        ProductsList,
        AddItem,
        TotalToPay,
        UserData
    },
    props: {
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
html {
    height: 100%;
}

body {
    padding-left: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
}

.left {
    width: 65%;
    height: 100%;
}

.right {
    flex-grow: 1;

}

.ProductsList {
    padding: 10px;
}

.productListContainer {
    height: 75vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px;

}

.footPage {
    background-color: white;
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
}
</style>
