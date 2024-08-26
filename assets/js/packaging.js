function getContainers(){
    let liters = document.getElementById("liters");
    let packaging = document.getElementById("packaging");
    let quantity = null;
    let message = "";

    if (liters.value != "") {
        if (packaging.value == 7){
            quantity = liters.value / 0.007;
        } else {
            quantity = liters.value / 0.05;
        }

        message = "Necesitas " + Math.ceil(quantity) + " envases de " + packaging.options[packaging.selectedIndex].text;
    } else {
        message = "Es necesario indicar los litros!";
        liters.focus();
    }

    document.getElementById("quantity").innerHTML = message;
}
