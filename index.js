let countEl=document.getElementById("count-el")
let countStr=document.getElementById("count-str")
let count = 0

function increment(){
    count+=1
    countEl.textContent=count
}

// innerText和textContent的区别？？
function save(){
    console.log(count)
    let addCountStr=count+" - "
    countStr.textContent+=addCountStr
    count=0
    countEl.textContent=count
}