let UserFromLS= JSON.parse(localStorage.getItem("UserData")) || []

let accou = document.querySelector(".Account");
if (UserFromLS == "") {
     
    accou.innerText = "Login";
    accou.addEventListener("click", () => {
        window.location.href='./login&signupPage/login.html'
    })
    // accou.append(Log)
} else {
    
    accou.innerText = "Account";
    accou.addEventListener("click", () => {
        window.location.href='../Account Details/Account.html'
    })

    // accou.append(Accoun)
}






let BagData = JSON.parse(localStorage.getItem("bagdata")) || [];


let wishDatafromLs = JSON.parse(localStorage.getItem("wishdata")) || [];

let subTotal = JSON.parse(localStorage.getItem("TotalPrice"));

displayDiv(BagData);

if(BagData=="")
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
    
    localStorage.setItem("category_name","menswear")
    location.href = "../productpage.html"


}))

document.querySelector('.WoMensButt').addEventListener("click", (()=>{
localStorage.setItem("category_name","womenswear")
location.href = "../productpage.html"
}))



document.querySelector('.EveryButt').addEventListener("click", (()=>{
localStorage.setItem("category_name","everything else")
location.href = "../productpage.html"
}))

} 

function displayDiv(BagData){

    let totalPrice = 0;
    BagData.forEach(function (el, index) {
        
        let childDiv = document.createElement("div");

        let  div1 = document.createElement("div");

        let imgTage = document.createElement("img");
        imgTage.setAttribute("src", el.imgUrl_1);
       

        let para1 = document.createElement("p");
        para1.innerText= el.brand
     
        
        let para2 = document.createElement("p");
        para2.innerText= el.name
   
        
        let para3 = document.createElement("p");
        para3.innerText= "Size : "+el.size;
     
        
        let para4 = document.createElement("p");
        para4.innerText= "Move to Wishlist";

        para4.addEventListener("click", function () {
           moveToWishlist(el,index);
        });
          
        let InfoDiv= document.createElement("div");
      
        InfoDiv.append(para1, para2, para3, para4);
        div1.append(imgTage, InfoDiv);

        let  div2 = document.createElement("div");

        
        let PriceTag = document.createElement("p");
        PriceTag.innerText= "$"+el.price+" USD";
    
        
        let RemoveTag = document.createElement("p");
        RemoveTag.innerText= "Remove";

        RemoveTag.addEventListener("click", function () {
            deleteData(index);
        });
           

        div2.append(PriceTag, RemoveTag)

        childDiv.append(div1,div2)
        document.querySelector("#appendItem").append(childDiv);


        // For Total Price

        totalPrice += +el.price;
        localStorage.setItem("TotalPrice", JSON.stringify(totalPrice))
        document.querySelector("#priceAppend").innerText = "$"+totalPrice+ " ." + "USD";
        document.querySelector("#finalPrice").innerText = "$"+totalPrice+"." + "USD";

        document.querySelector("#countShow").innerText = "("+BagData.length+")";
    });
}


//For remove particular index
function deleteData(index) {
    BagData.splice(index, 1);
    localStorage.setItem("bagdata", JSON.stringify(BagData));
    window.location.reload();
}

//move to item from bag to wish list

function moveToWishlist(el,index){
    BagData.splice(index, 1);
    localStorage.setItem("bagdata", JSON.stringify(BagData));
    wishDatafromLs.push(el);
    localStorage.setItem("wishdata", JSON.stringify(wishDatafromLs));
    window.location.reload();
}


// Checkout Section And Email Display

let Email = JSON.parse(localStorage.getItem("UserData")) || []
console.log(Email);

let emailAppend= document.getElementById("email");

for(let i=Email.length-1;i>=0;i--)

{
emailAppend.append(Email[i].email);
break;
}

// Redirect to checkout page

document.getElementById('proceed').addEventListener("click",()=>{
 window.location.href='../CheckoutAndOTP/Checkout.html'
})

