
let UserFromLS = JSON.parse(localStorage.getItem("UserData")) || [];
console.log(UserFromLS)

let accou = document.querySelector(".Account");

function CheckLogin() {
    if (UserFromLS == "") {
        let Log = document.createElement("p");
        Log.innerText = "Login";
        Log.addEventListener("click", () => {
            alert("Login")
        })
        accou.append(Log)
    } else {
        let Accoun = document.createElement("p");
        Accoun.innerText = "Account";
        Accoun.addEventListener("click", () => {
            console.log("hello world")
            alert("Account")
        })

        accou.append(Accoun)
    }
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