let query = localStorage.getItem("category_name");

let appendData = (data)=>{
    document.getElementById("prod_content").innerHTML = ""
    console.log(data)
    data.forEach(el => {
        
        console.log(el.product_id)
        let div = document.createElement("div")
         
        let imgdiv = document.createElement("div")

        let img = document.createElement("img")
        let imag = `https://img.ssensemedia.com/images/${el.product_id}_1/image.jpg`
        img.src = imag
        
        imgdiv.append(img)
        div.append(imgdiv)
        document.getElementById("prod_content").append(div)
    });
}



let getData = async (url)=>{
        
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    appendData(data)
}




let countData = async ()=>{

    let res = await fetch(`https://sheltered-cove-81952.herokuapp.com/api/${query}`)
    let data = await res.json();
    document.getElementById("page_btn").innerHTML=""
    for(let i = 1 ; i <= Math.ceil(data.length/40); i++){
        let div = document.createElement("div")
        let btn = document.createElement("button")
        div.append(btn)
        btn.innerHTML = `${i}`;
        btn.addEventListener("click",(i)=>{
            console.log(i.target.innerHTML)
            let x = i.target.innerHTML
            let url = `https://sheltered-cove-81952.herokuapp.com/api/${query}?_page=${x}&_limit=20`
            getData(url)
        })
        document.getElementById("page_btn").append(div)
      }
    
    }

    countData()

    getData(`https://sheltered-cove-81952.herokuapp.com/api/${query}?_page=1&_limit=20`)


    
    
    
    


    // getData(data)



countData()