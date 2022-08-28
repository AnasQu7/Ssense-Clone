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
        window.location.href='./Account Details/Account.html'
    })

    // accou.append(Accoun)
}


let menswear = ()=>{
    localStorage.setItem("category_name","menswear")
    location.href = "./productpage.html"
}
let womenswear = ()=>{
    localStorage.setItem("category_name","womenswear")
    location.href = "./productpage.html"
}
let everything = ()=>{
    localStorage.setItem("category_name","everything else")
    location.href = "./productpage.html"
}
let sale = ()=>{
    localStorage.setItem("category_name","sale")
    location.href = "./productpage.html"
}