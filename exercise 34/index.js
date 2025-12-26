

const list=document.querySelector('.LIST');


function add(){
    let newItem=document.createElement('li');
    newItem.textContent="item4"

list.appendChild(newItem)
}

function remove(){
    list.removeChild(list.lastChild)
 
    
}