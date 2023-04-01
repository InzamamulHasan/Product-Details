function addievn(){
    let form=document.querySelector("form");
    let tbody=document.querySelector("tbody");
    let c=0;

    form.addEventListener("submit",function(e){
        e.preventDefault();
        let obj={
        proname: form.name.value,
        category: form.category.value,
        brand: form.brand.value,
        price: form.price.value,
        delivered: form.deliveredBy.value

        }
        console.log(obj);
        display(obj);
    });
    function display(data){
        let tr=document.createElement("tr");
        let col1=document.createElement("td");
        col1.innerText=data.proname;
        let col2=document.createElement("td");
        col2.innerText=data.category;
        let col3=document.createElement("td");
        col3.innerText=data.brand;
        let col4=document.createElement("td");
        col4.innerText=data.price;
        let col5=document.createElement("td");
        col5.innerText=data.delivered;
        let col6=document.createElement("td");
        col6.innerText=prcsegment(data.price);
        let col7=document.createElement("td");
        col7.innerText="Delete";
        col7.addEventListener("click",function(e){
            c=c-data.price;
            document.getElementById("total-price").innerText="Total Price:- "+c;
            e.target.parentNode.remove();
        });
        tr.append(col1,col2,col3,col4,col5,col6,col7);
        tbody.append(tr);
        c=c+eval(data.price);
        document.getElementById("total-price").innerText="Total Price:- "+c;
    }
    function prcsegment(price){
        if(price>1000){
            return "Expensive";
        }else{
            return "Not-Expensive"
        }
    }

}
addievn();