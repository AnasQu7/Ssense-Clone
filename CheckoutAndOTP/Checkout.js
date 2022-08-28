

let shippingArray = [];

document.querySelector("#OrderProduct").style.display = "grid";
document.querySelector("#OrderProduct").style.gridTemplateColumns = "0.7fr 2fr"

let OrderProduct = JSON.parse(localStorage.getItem("bagdata"));
let totalPrice = JSON.parse(localStorage.getItem("TotalPrice"));

OrderProduct.forEach(function (elem, index) {
    let divA = document.createElement("div");
    let itemImage = document.createElement("img");
    itemImage.src = elem.imgUrl_1;
    itemImage.style.width = "50%";

    let divB = document.createElement("div");
    divB.style.display = "grid";
    divB.style.gridTemplateColumns = "2fr 1fr"

    let name = document.createElement("span")
    let price = document.createElement("span")

    name.innerText = elem.name;

    name.style.color = "gray";

    name.style.fontFamily = "sans-serif";
    name.style.fontSize = "13px";

    price.innerText = "$" + elem.price +".00";
    price.style.color = "gray";
    price.style.fontFamily = "sans-serif";
    price.style.fontSize = "15px";

    divA.append(itemImage);
    divB.append(name, price);
    document.querySelector("#OrderProduct").append(divA, divB);
})
document.querySelector("#subTotal").style.display = "grid";
document.querySelector("#subTotal").style.gridTemplateColumns = "3fr 1fr";
document.querySelector("#subTotal").style.gridTemplateRows = "1fr 1fr 1fr";

let SubTotalTag = document.createElement("p");

let subTotalPrice = document.createElement("p");

SubTotalTag.innerText = "Subtotal";
subTotalPrice.innerText = totalPrice;   // here totalPrice Coming From The Products
subTotalPrice.style.textAlign = "right";

let TotalItems = document.createElement("p");
TotalItems.innerText = "Total Items";

let TotalItemsLength = document.createElement("p");

TotalItemsLength.innerText = OrderProduct.length;

TotalItemsLength.style.textAlign = "right";


let ShippingTag = document.createElement("p");
let ShippingFess = document.createElement("p");
ShippingTag.innerText = "Shipping total";
ShippingFess.innerText = "$40.00";
ShippingFess.style.textAlign = "right";


document.querySelector("#subTotal").
append(SubTotalTag, subTotalPrice, TotalItems, TotalItemsLength, ShippingTag,
    ShippingFess);

let OrderTotalTag = document.createElement("span");
OrderTotalTag.innerText = "Order total(USE)";
OrderTotalTag.style.marginRight = "45%"
let price = eval(totalPrice + 40);

let OrderTotalPrice = document.createElement("span");
OrderTotalPrice.innerText = "$" + price +".00";

let Notice= document.createElement("p");
Notice.innerText="Important Notice";

let NoticeDescription= document.createElement("p");
NoticeDescription.innerText="Our prices do not include Duty and VAT. Please consult your country/region's customs legistation for more information about potential additonal chargers"
NoticeDescription.style.color = "gray";
document.querySelector("#placeOrder").append(OrderTotalTag, OrderTotalPrice);

//this button will redirect it to the OTP final page

let btn = document.createElement("button");
btn.innerText = "PLACE ORDER";
btn.style.color = "white";
btn.style.padding = "10px";
btn.style.marginTop = "5%";
btn.style.backgroundColor = "black";
btn.style.fontFamily = "sans-serif";
btn.style.width = "100%";
btn.style.cursor = "pointer";


document.querySelector("#placeOrder").append( Notice, NoticeDescription,btn);
document.querySelector("#placeOrder").style.fontSize = "12px";
document.querySelector("#placeOrder").style.fontFamily = "sans-serif";

// to catch the details submitted on the page-->
btn.addEventListener("click", SendToOTP);

function SendToOTP() {
    let shippingDetails = {
        name: document.querySelector("#firstName").value + " " + document.querySelector("#lastName").value,
        strAddress: document.querySelector("#address").value,
        company: document.querySelector("#company").value,
        city: document.querySelector("#city").value,
        zipCode:  document.querySelector("#zipCode").value,
        country: document.querySelector("#country").value,
        state: document.querySelector("#state").value,
        phone: +document.querySelector("#phoneNumber").value,
        card:  document.querySelector("#cNumber").value,
        month: document.querySelector("#month").value
    }
  let CardLength= shippingDetails.card;

 
   if(shippingDetails.name=="" || shippingDetails.strAddress=="" 
   || shippingDetails.zipCode =="" || shippingDetails.phone =="" || shippingDetails.zipCode.length <3 || CardLength.length <16)
   {
    alert("Please Fill The Details")
   }else
   {
    
    shippingArray.push(shippingDetails);
    localStorage.setItem("shippingDetails", JSON.stringify(shippingArray));
      window.location.replace("OTP.html");
   }
   
}


