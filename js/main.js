

let numberDisc = 0;
let finalPrice = 0;
let priceWithDiscount = 0;
let cardText = document.getElementById("carro");
let cardBtn = document.getElementById("cardbtn")


//sales cart array
let cart = [];


//disc array

let cds = [
    {
        id: 1,
        discName: "La cumbia del ciclo",
        price: 100,
    },
    {
        id: 2,
        discName: "Binomio",
        price: 200,
    },
    {
        id: 3,
        discName: "Ana María",
        price: 300,
    },
];



//add to cart

function addProd (id){ 
    let priceCalc = 0
    for (let i = 0; i < cds.length; i++) {
        // check the ID
        if (cds[i].id === id) {
         cart.push(cds[i]);
         //calculate final price
         priceCalc = finalPrice + cds[i].price;
         finalPrice=priceCalc;
        } 
      }
      console.log(finalPrice);
      return cardText.textContent = `En el carrito hay: ${cart.length} discos 
      por un valor de $ ${finalPrice}`; 
}


//checkout function
function checkout (key, desc){
    cardText.textContent = `En el carrito hay: ${cart.length} discos 
                por un valor de $ ${key} y se aplicó un descuento del ${desc}`;
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido") 
    let mail = prompt ("Ingrese su email") 
    let tarjeta = prompt ("Ingrese el número de su tarjeta de crédito") 
    console.log(`Estimado ${nombre} ${apellido}, el monto a pagar es de $ ${key}, se enviará la factura a ${mail}.`);
    clearCart();
}

//discount function
function discount (){
    let discountCode = prompt ("Ingrese su código de descuento");
           switch (discountCode) {
            case "DESC10":
                priceWithDiscount = finalPrice - (finalPrice * 0.1) 
                checkout (priceWithDiscount, "10%");       
                break;
            case "DESC20":
                priceWithDiscount = finalPrice - (finalPrice * 0.2); 
                checkout (priceWithDiscount, "20%");    
                break;
            case "DESC30":
                priceWithDiscount = finalPrice - (finalPrice * 0.3);
                checkout (priceWithDiscount, "30%");    
                break;
            default:
                console.log("No ingresaste ningún código o el ingresado no es válido");
                checkout (finalPrice, "0%");
                break;
        }
}



//clear function
function clearCart (){
    numberDisc = 0;
    finalPrice = 0;
    priceWithDiscount = 0;
    cart = [];
    // i was trying to test a goodbye message and trying to test the .innerHTML method but this doesn't work
    /* return (cardText.textContent = "Gracias por comprar", cardBtn.innerHTML =`<a href="#" class="btn btn-success" onclick="">Compra Finalizada</a>`);  */
}; 





