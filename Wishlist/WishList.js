
let WishListData = JSON.parse(localStorage.getItem("wishdata")) || [];

display(WishListData)

let bagdata = JSON.parse(localStorage.getItem("bagdata")) || [];

// If There is no any item on the wishlist page

if(WishListData=="")
{
 let EmptyDiv= document.querySelector('.EmptyField');
 let EmptyTag= document.createElement("p");
 EmptyTag.innerText="Your wish list is empty";

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


function display(WishListData){

    WishListData.forEach(function (el, index) {
        
        let childDiv = document.createElement("div");

       
        let imgTage = document.createElement("img");
        imgTage.setAttribute("src", el.imgUrl_1);

        let paraDiv = document.createElement("div");
     
        
        let para1 = document.createElement("p");
        para1.innerText= el.brand
     
        
        let para2 = document.createElement("p");
        para2.innerText= el.name
       
        
        let para3 = document.createElement("p");
        para3.innerText= "Size : "+el.size;
   
        
        let para4 = document.createElement("p");
        para4.innerText= "$"+el.price+" USD";
        
        
        let para5 = document.createElement("p");
        para5.innerText= "ADD TO BAG"

        para5.addEventListener("click",function(){
            addtobag(el,index);
        })
        
        // enter remove event listner
        let para6 = document.createElement("p");
        para6.innerText= "X Remove"
        para6.addEventListener("click", function () {
            deleteData(index);
        });

        paraDiv.append(para1, para2, para3, para4);
        childDiv.append(imgTage,paraDiv,para5,para6);
        document.querySelector("#container").append(childDiv);
    });
}

//For remove particular index
function deleteData(index) {
    WishListData.splice(index, 1);
    localStorage.setItem("wishdata", JSON.stringify(WishListData));
    window.location.reload();
}

//Add to bag from wishlists page
function addtobag(el,index){
    bagdata .push(el)
    WishListData.splice(index, 1);
    localStorage.setItem("wishdata", JSON.stringify(WishListData));
    localStorage.setItem("bagdata",JSON.stringify(bagdata ));
   window.location.href="../Shopping Bag/ShoppingBag.html"
}







