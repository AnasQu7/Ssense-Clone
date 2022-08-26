// import Navbar from "../Navbar.js"
// console.log(Navbar)

// document.getElementById("navbar").innerHTML=Navbar()

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


