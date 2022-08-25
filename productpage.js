let query = localStorage.getItem("category_name");

let appendData = (data)=>{
    document.getElementById("prod_content").innerHTML = ""

    if(data.length===0){
        let img = document.createElement("img")
        img.src = "https://img.freepik.com/premium-vector/modern-minimal-found-error-icon-oops-page-found-404-error-page-found-with-concept_599740-716.jpg?w=2000"
        img.setAttribute("id","error")
        document.getElementById("prod_content").append(img)
    }else{

    
    console.log(data)
    data.forEach(el => {
        
        console.log(el.product_id)
        let div = document.createElement("div")
         
        let imgdiv = document.createElement("div")

        let img = document.createElement("img")
        let imag = `https://img.ssensemedia.com/images/${el.product_id}_1/image.jpg`
        img.src = imag
        
        let brand = document.createElement("p");
        brand.textContent = el.type

        let name = document.createElement("p");
        name.textContent = el.name

        let price = document.createElement("p")
        price.textContent = `$${el.price}`

        imgdiv.append(img)
        div.append(imgdiv,brand,name,price)
        document.getElementById("prod_content").append(div)
    });
}
}



let getData = async (url)=>{
        
   try{
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    appendData(data)
   }
   catch{
    document.getElementById("prod_content")
   }
}




let countData = async ()=>{

    let res = await fetch(`https://sheltered-cove-81952.herokuapp.com/api/${query}`)
    let data = await res.json();
    document.getElementById("page_btn").innerHTML=""
    for(let i = 1 ; i <= Math.ceil(data.length/60); i++){
        let div = document.createElement("div")
        let btn = document.createElement("button")
        div.append(btn)
        btn.innerHTML = `${i}`;
        btn.addEventListener("click",(i)=>{
            console.log(i.target.innerHTML)
            let x = i.target.innerHTML
            let url = `https://sheltered-cove-81952.herokuapp.com/api/${query}?_page=${x}&_limit=60`
            getData(url)
        })
        document.getElementById("page_btn").append(div)
      }
    
    }

    countData()

    getData(`https://sheltered-cove-81952.herokuapp.com/api/${query}?_page=1&_limit=60`)
    
    
    
    
    
    
    
    
    // getData(data)
    
    
    
    countData()
    
    
    leftText.forEach(el => {
        let p = document.createElement("p")
        p.textContent = el.leftText;
        document.getElementById("designers").append(p)
        p.addEventListener("click",()=>{
            getData(`https://sheltered-cove-81952.herokuapp.com/api/${query}?type=${el.leftText}`)
           
    })
});