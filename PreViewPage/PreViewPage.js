let PreViewDataFromLS = JSON.parse(localStorage.getItem("PreViewData")) || [];
console.log(PreViewDataFromLS);

let WishData = JSON.parse(localStorage.getItem("wishdata")) || [];
let BagData = JSON.parse(localStorage.getItem('bagdata')) || []


display(PreViewDataFromLS);


function display(PreViewDataFromLS) {
    PreViewDataFromLS.forEach(function (elem) {
        // left side part
        let div1 = document.createElement("div");

        document.querySelector("#box1").append(div1);

        let brand = document.createElement("h1");
        brand.innerText = elem.brand;

        let name = document.createElement("h2");
        name.innerText = elem.name;

        let des = document.createElement('p');
        des.setAttribute('class', 'description')
        des.innerText = elem.description;

        let id = document.createElement("p");
        id.innerText = `222887F09100${elem.id}`

        div1.append(brand, name, des, id);

        // middle part

        let div2 = document.createElement("div");

        let ProductImage_1 = document.createElement("img");
        ProductImage_1.src = elem.imgUrl_1;

        let ProductImage_2 = document.createElement('img');
        ProductImage_2.src = elem.imgUrl_1;
        div2.append(ProductImage_1, ProductImage_2);

        document.querySelector("#box2").append(div2);

        //right side part

        // If Tag Clothing 👍 👍 👍 👍 👍

        if (elem.tag == "clothing") {
            let div3 = document.createElement("div");
            document.querySelector("#box3").append(div3);

            let price = document.createElement("h3");
            price.innerText = `$${elem.price} USD`;

            let select = document.createElement("select");

            select.setAttribute("id", "size");

            select.setAttribute("label", "SELECT SIZE");

            // select.innerText="SELECT SIZE";

            let opt1 = document.createElement("option");
            opt1.innerText = "SELECT SIZE";
            let opt2 = document.createElement("option");
            opt2.innerText = "XXS";
            let opt3 = document.createElement("option");
            opt3.innerText = "XS";
            let opt4 = document.createElement("option");
            opt4.innerText = "S";
            let opt5 = document.createElement("option");
            opt5.innerText = "M";
            let opt6 = document.createElement("option");
            opt6.innerText = "L";
            let opt7 = document.createElement("option");
            opt7.innerText = "XL";
            let opt8 = document.createElement("option");
            opt8.innerText = "XXL";
            let opt9 = document.createElement("option");
            opt9.innerText = "XXXL";
            select.append(opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9);

            let btn1 = document.createElement("button");
            btn1.innerText = "ADD TO BAG";
            btn1.setAttribute("id", "btn1");
            btn1.addEventListener("click", function () {
                let fit = document.querySelector("#size").value;
                addtobag(elem, fit);
            })

            let btn2 = document.createElement("button");
            btn2.innerText = "ADD TO WISHLIST";
            btn2.setAttribute("id", "btn2");
            btn2.addEventListener("click", function () {
                let fit = document.querySelector("#size").value;
                addtowish(elem, fit);
            })

            let div5 = document.createElement("div");
            div5.append(btn1, btn2);

            let div6 = document.createElement("div");
            div6.setAttribute("id", "fitpredictor");
            let image = document.createElement("img");
            image.setAttribute("id", "logopng")
            image.src = "https://images.squarespace-cdn.com/content/v1/54e3cdb3e4b0b56fcc45e9e2/1458176028392-UUPHVWHWQKX88UXLG2RO/F+STOP+CAMERAS.jpg?format=300w";

            let model = document.createElement("p");
            model.innerText = elem.model;


            div6.append(image, model)

            div3.append(price, select, div5, div6)
        }


        // If Tag shoes 👍 👍 👍 👍 👍

        else if (elem.tag == "shoes") {


            let div3 = document.createElement("div");
            document.querySelector("#box3").append(div3);

            let price = document.createElement("h3");
            price.innerText = `$${elem.price} USD`;

            let select = document.createElement("select");
            select.setAttribute("id", "size");
            select.setAttribute("label", "SELECT SIZE");
            // select.innerText="SELECT SIZE";
            let opt1 = document.createElement("option");
            opt1.innerText = "SELECT SIZE";
            let opt2 = document.createElement("option");
            opt2.innerText = "UK 6 = IT 40";
            let opt3 = document.createElement("option");
            opt3.innerText = "UK 7 = IT 41";
            let opt4 = document.createElement("option");
            opt4.innerText = "UK 8 = IT 42";
            let opt5 = document.createElement("option");
            opt5.innerText = "UK 9 = IT 43";
            let opt6 = document.createElement("option");
            opt6.innerText = "UK 10 = IT 44";
            let opt7 = document.createElement("option");
            opt7.innerText = "UK 11 = IT 45";
            let opt8 = document.createElement("option");
            opt8.innerText = "UK 12 = IT 46";

            select.append(opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8);

            let btn1 = document.createElement("button");
            btn1.innerText = "ADD TO BAG";
            btn1.setAttribute("id", "btn1");
            btn1.addEventListener("click", function () {
                let fit = document.querySelector("#size").value;
                addtobag(elem, fit);
            })

            let btn2 = document.createElement("button");
            btn2.innerText = "ADD TO WISHLIST";
            btn2.setAttribute("id", "btn2");
            btn2.addEventListener("click", function () {

                let fit = document.querySelector("#size").value;

                addtowish(elem, fit);
            })

            let div5 = document.createElement("div");
            div5.append(btn1, btn2);

            let div6 = document.createElement("div");
            div6.setAttribute("id", "fitpredictor");
            let image = document.createElement("img");
            image.setAttribute("id", "logopng")
            image.src = "https://images.squarespace-cdn.com/content/v1/54e3cdb3e4b0b56fcc45e9e2/1458176028392-UUPHVWHWQKX88UXLG2RO/F+STOP+CAMERAS.jpg?format=300w";

            let fitp = document.createElement("p");
            fitp.innerText = "Fit Predictor";

            let calci = document.createElement("p");
            calci.innerText = "Calculate your size";

            div6.append(image, fitp, calci)



            div3.append(price, select, div5, div6)

        }


        // If Tag accessories👍 👍 👍 👍 👍

        else if (elem.tag == "accessories") {


            let div3 = document.createElement("div");
            document.querySelector("#box3").append(div3);

            let price = document.createElement("h3");
            price.innerText = `$${elem.price} USD`;



            let btn1 = document.createElement("button");
            btn1.innerText = "ADD TO BAG";
            btn1.setAttribute("id", "btn1");
            btn1.addEventListener("click", function () {
                let fit = document.querySelector("#size")?.value;
                addtobag(elem, fit);
            })

            let btn2 = document.createElement("button");
            btn2.innerText = "ADD TO WISHLIST";
            btn2.setAttribute("id", "btn2");
            btn2.addEventListener("click", function () {
                let fit = document.querySelector("#size").value;
                addtowish(elem, fit);
            })

            let div5 = document.createElement("div");
            div5.append(btn1, btn2);

            div3.append(price, div5);

        }

        // If Tag bag👍 👍 👍 👍 👍

        else if (elem.tag == "bag") {
            let div3 = document.createElement("div");
            document.querySelector("#box3").append(div3);

            let price = document.createElement("h3");
            price.innerText = `$${elem.price} USD`;



            let btn1 = document.createElement("button");
            btn1.innerText = "ADD TO BAG";
            btn1.setAttribute("id", "btn1");
            btn1.addEventListener("click", function () {
                let fit = document.querySelector("#size")?.value;
                addtobag(elem, fit);
            })

            let btn2 = document.createElement("button");
            btn2.innerText = "ADD TO WISHLIST";
            btn2.setAttribute("id", "btn2");
            btn2.addEventListener("click", function () {
                let fit = document.querySelector("#size")?.value;
                addtowish(elem, fit);
            })

            let div5 = document.createElement("div");
            div5.append(btn1, btn2);

            div3.append(price, div5);
        }

    })

}

// fit  215


function addtobag(elem, fit) {

    if (fit == "SELECT SIZE") {
        alert("Please Select Size");

    } else {
        if (fit == undefined) {
            elem["size"] = "-";
        } else if (elem["size"] == undefined) {
            elem["size"] = fit;
        } else {
            elem.size = fit;
        }
        WishData.push(elem)
        localStorage.setItem("bagdata", JSON.stringify(WishData));
        window.location.href='../Shopping Bag/ShoppingBag.html'

    }

}


function addtowish(elem, fit) {

    if (fit == "SELECT SIZE") {
        alert("Please Select Size");


    }
    else {
        if (fit == undefined) {
            elem["size"] = "-";
        } else if (elem["size"] == undefined) {
            elem["size"] = fit;
        } else {
            elem.size = fit;
        }
        WishData.push(elem)
        localStorage.setItem("wishdata", JSON.stringify(WishData));
        window.location.href="../Wishlist/Wishlist.html"
    }


}

