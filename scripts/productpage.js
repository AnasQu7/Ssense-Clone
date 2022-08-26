if(!navigator.onLine){
    let img = document.createElement("img");
    img.src = "./Internet-Access-Error.jpg"
    img.setAttribute("id", "error");
    document.getElementById("prod_content").append(img);
}
else{
    let query = localStorage.getItem("category_name");

let appendData = (data) => {
  document.getElementById("prod_content").innerHTML = "";

  if (data.length === 0) {
    let img = document.createElement("img");
    img.src =
      "https://img.freepik.com/premium-vector/modern-minimal-found-error-icon-oops-page-found-404-error-page-found-with-concept_599740-716.jpg?w=2000";
    img.setAttribute("id", "error");
    document.getElementById("prod_content").append(img);
  } else {
    console.log(data);
    data.forEach((el) => {
    //   console.log(el.product_id);
      let div = document.createElement("div");

      let imgdiv = document.createElement("div");

      let img = document.createElement("img");
      let imag = `https://img.ssensemedia.com/images/${el.product_id}_1/image.jpg`;
      img.src = imag;

      let brand = document.createElement("p");
      brand.textContent = el.type;

      let name = document.createElement("p");
      name.textContent = el.name;

      let price = document.createElement("p");
      price.textContent = `$${el.price}`;

      imgdiv.append(img);
      div.append(imgdiv, brand, name, price);
      document.getElementById("prod_content").append(div);
      div.style = "cursor: pointer;";
      div.addEventListener("click", () => {
        let obj = {
          id: el.product_id,
          imgUrl_1: `https://img.ssensemedia.com/images/${el.product_id}_1/image.jpg`,
          imgUrl_2: `https://img.ssensemedia.com/images/${el.product_id}_2/image.jpg`,
          brand: el.type,
          name: el.name,
          price: el.price,
          description: el.description,
          tag: "clothing",
          type: el.categories,
          model: el.model_size,
        };

        localStorage.setItem("display_prod", JSON.stringify(obj));
      });
    });
  }
};

let getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    appendData(data);
  } catch {
    document.getElementById("prod_content");
  }
};

let countData = async () => {
  let res = await fetch(
    `https://sheltered-cove-81952.herokuapp.com/api/${query}`
  );
  let data = await res.json();
  document.getElementById("page_btn").innerHTML = "";
  for (let i = 1; i <= Math.ceil(data.length / 60); i++) {
    let div = document.createElement("div");
    let btn = document.createElement("p");
    btn.setAttribute("class", "pointer");
    div.append(btn);
    btn.innerHTML = `${i}`;
    btn.addEventListener("click", (i) => {
      console.log(i.target.innerHTML);
      let x = i.target.innerHTML;
      let url = `https://sheltered-cove-81952.herokuapp.com/api/${query}?_page=${x}&_limit=60`;
      getData(url);
    });
    document.getElementById("page_btn").append(div);
  }
};

countData();

getData(
  `https://sheltered-cove-81952.herokuapp.com/api/${query}?_page=1&_limit=60`
);

leftText.forEach((el) => {
  let p = document.createElement("p");
  let br = document.createElement("br");
  p.textContent = el.leftText;
  p.setAttribute("class", "pointer");
  document.getElementById("designers").append(p, br);
  p.addEventListener("click", () => {
    getData(
      `https://sheltered-cove-81952.herokuapp.com/api/${query}?type=${el.leftText}`
    );
  });
});

let clothing = () => {
  localStorage.setItem("category_name", "EVERYTHING ELSE");
  location.href = "./productpage.html";
};
let category = () => {
  console.log(event.target.innerHTML);
  getData(
    `https://sheltered-cove-81952.herokuapp.com/api/sale?q=${event.target.innerHTML}`
  );
};


let sortLow = ()=>{
    getData(`https://sheltered-cove-81952.herokuapp.com/api/${query}?_sort=price&_order=asc`)
}
let sortHigh = ()=>{
    getData(`https://sheltered-cove-81952.herokuapp.com/api/${query}?_sort=price&_order=desc`)
}
let trending = ()=>{
    localStorage.setItem("category_name","sale")
    location.href = "./productpage.html"
}
let latest = ()=>{
    localStorage.setItem("category_name","Everything else")
    location.href = "./productpage.html"
}
let colors = ()=>{
    console.log(event.target.innerHTML)
    getData(`https://sheltered-cove-81952.herokuapp.com/api/${query}?q=${event.target.innerHTML}`)
}
let reload = ()=>{
    location.reload()
}
}