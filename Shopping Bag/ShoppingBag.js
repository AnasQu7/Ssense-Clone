
let WishListData = JSON.parse(localStorage.getItem("wishdata")) || [];

// console.log(WishListData)

let bagdata = JSON.parse(localStorage.getItem("bagdata")) || [];

// If There is no any item on the wishlist page

if(WishListData=="")
{
 let EmptyDiv= document.querySelector('.EmptyField');
 let EmptyTag= document.createElement("p");
 EmptyTag.innerText="Your shopping bag is empty";

 let MensButton= document.createElement("button");
 MensButton.innerText='SHOP MEANSWEAR';
 MensButton.setAttribute('class','MensButt')

 let WomensButton= document.createElement("button");
 WomensButton.innerText='SHOP WOMENSWEAR';
 WomensButton.setAttribute('class','WoMensButt')

 let EveryThingButton= document.createElement("button");
 EveryThingButton.innerText='SHOP EVERYTHING ELSE';
EveryThingButton.setAttribute('class','EveryButt')

 let buttDiv= document.createElement("div");

  buttDiv.append(MensButton, WomensButton, EveryThingButton)

 EmptyDiv.append(EmptyTag, buttDiv);


// Redirect Link With These Button

document.querySelector('.MensButt').addEventListener("click", (()=>{
    alert("Go Mens page")
}))

document.querySelector('.WoMensButt').addEventListener("click", (()=>{
    alert("Go WoMens page")
}))



document.querySelector('.EveryButt').addEventListener("click", (()=>{
    alert("Go Home page")
}))

}



