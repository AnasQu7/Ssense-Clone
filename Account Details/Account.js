
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
            alert("Account")
        })

        accou.append(Accoun)
    }
}

document.querySelector("form").addEventListener("submit", accountDetails);
let accDet = [];

function accountDetails(event) {
    event.preventDefault();
    let AccountInfo = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        email: document.querySelector("#email").value,
        oldPassword: document.querySelector("#oldPassword").value,
        newPassword: document.querySelector("#newPassword").value
    };

    console.log(AccountInfo.oldPassword)

    let flage = false;

    UserFromLS.map((OldPasword) => {
        if (OldPasword.pass == AccountInfo.oldPassword) {
            flage =true;
        } 
    })

    if (flage == true) {
        alert("Successfully Updated")
        accDet.push(AccountInfo);
        localStorage.setItem("UpdatedDetails", JSON.stringify(accDet));
    }
    else
    {
         
        alert("Password Do not match")
    }
}

