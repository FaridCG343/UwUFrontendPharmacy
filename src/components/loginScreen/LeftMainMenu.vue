<template>
    <div class="left">
        <h1 style="text-align:center; color: #333; font-size: 50px;"><b>Farmacia UwU</b></h1>
        <table style="width:100%; height: 50%;   padding: 25px;">
            <tr class="menu-row">
                <td> <button class="mainitem">VENTA</button> </td>
                <td></td>
                <td> <button class="mainitem">PRODUCTO</button> </td>
            </tr>
            <tr class="menu-row">
                <td> <button class="mainitem">EMPLEADO</button> </td>
                <td></td>
                <td> <button class="mainitem">USUARIO</button> </td>
            </tr>
        </table>
        <div class="cancel">
            <button class="mainitem">CANCELACION</button>
        </div>
    </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-row {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}


.td {
    width: 100%;
    height: 100%;

}

.mainitem {
    width: 100%;
    height: 170px;
    border-radius: 2%;
    font-size: 20px;

}

.cancel {
    width: 80%;
    margin: 0 auto;
}
</style>
