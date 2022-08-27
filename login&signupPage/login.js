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




document.querySelector("form").addEventListener("submit", chkMail);

let EmailArr= JSON.parse(localStorage.getItem('email')) ||[]
function chkMail(e) {
    e.preventDefault()

  let object={
    email:document.getElementById("email").value
  }

     
  if(object.email=="")
  {
      alert("Email field can't be blank")
  }else{
     EmailArr.push(object);

     localStorage.setItem("email", JSON.stringify(EmailArr));

     window.location.href="./signin.html"
  }
  
  
}


