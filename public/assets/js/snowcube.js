

function addOrders(order) {
    const name = order.name;
    const items = order.items;
    let tooltip_text = ""

    items.forEach(item=> {
       tooltip_text += item.item_name + " x"+item.qty + "<br>"
    });

    console.log(tooltip_text);

    const orderdiv = document.createElement("div");
    const namediv = document.createElement("div");
    const  

}


let order = {name:"Ramya",items:[{item_name:"kulfi",qty:1},{item_name:"fudge",qty:2}]}

const click = document.querySelector(".test");

click.addEventListener("click", addOrders(order));