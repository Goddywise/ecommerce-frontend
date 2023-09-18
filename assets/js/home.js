const loadTopSelling =async()=>{
    // let data = productObject.data;
    let data;
    let res = await fetch(`http://localhost:5050/products/get-all-products`);
    data = await res.json();
    //console.log(data.data);
    
    const topSelling = [];
    let i;
    for(i=0; i < 6; i++){
        topSelling.push(data.dta[i]);
    }
   //console.log(topSelling)
    let content = '';
    topSelling.forEach(({image,name,price,discount},ind) =>{
        content+= `
            <a class="${ind+1 > 4 ? 'medium-screen':''}"> 
                <img src="http://localhost:5050/assets/images/${image}"/>
                <div>
                    <span>${name}</span>
                    <div>
                        ${discount == 0 ?'':`<span>${price - (discount/100)*price}</span>`}
                        <span>${price}</span>
                    </div>
                </div>
            </a>
        `
    });
    const container = document.querySelector(".top-selling > div > div");
    container.innerHTML = content;
}

const loadOtherProduct = async()=>{
    let data;
    let res = await fetch(`http://localhost:5050/products/get-all-products`);
    data = await res.json();
    data = data.dta;
    const dataStart = 6;
    const otherProduct = data.slice(dataStart);
   
    let content = '';
    otherProduct.forEach(({image,name,price,discount},ind) =>{
        content+= `
            <a> 
                <img src="http://localhost:5050/assets/images/${image}"/>
                <div>
                    <span>${name}</span>
                    <div>
                        ${discount == 0 ?'':`<span>${price - (discount/100)*price}</span>`}
                        <span>${price}</span>
                    </div>
                </div>
            </a>
        `
    });
    const container = document.querySelector(".other-products > div > div");
    container.innerHTML = content;
}

window.onload  = ()=>{
    loadTopSelling();
    loadOtherProduct();
}
