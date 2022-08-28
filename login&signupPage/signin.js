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










let mail = JSON.parse(localStorage.getItem("email"));
// console.log(mail)
document.querySelector("form").addEventListener("submit", Verifyemail);

let Store = JSON.parse(localStorage.getItem("UserData")) || []

function Verifyemail(event) {
    event.preventDefault();

    let Obj = {
        email: document.getElementById('email').value,
        pass: document.getElementById("password").value,
    }

    let flage = false;

    mail.map((mai) => {
        if (mai.email == Obj.email) {
            flage = true;
        }
    })

    if (flage == true) {
        //    window.location.href="index.html"
        alert("Register Successful");
        Store.push(Obj);
        localStorage.setItem("UserData", JSON.stringify(Store));
        location.href="../index.html"
    }
    else {
        alert("Email Haven't Found")
    }
    email: document.getElementById('email').value="";
    pass: document.getElementById("password").value="";

}
