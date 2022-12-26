let inpamt = document.getElementById("amount")
let numpeople = document.getElementById("numpeople")
let reset = document.getElementById("reset")
let tipbill = document.getElementById("tipbill")
let totalbill = document.getElementById("totalbill")
let five  = document.getElementById("five")
let ten = document.getElementById("ten")
let fifteen = document.getElementById("fifteen")
let twentyfive = document.getElementById("twentyfive")
let fifty = document.getElementById("fifty")

reset.addEventListener("click",(e)=>{
    e.preventDefault()
    tipbill.innerHTML = `$ 0.00`
    totalbill.innerHTML = `$ 0.00`
})
five.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inpamt.value=="" || numpeople.value==""){
        return
    }
    let tip = ((inpamt.value*5)/100)/numpeople.value
    parseFloat(tip)
    tip.toFixed(2)
    let total= Number(inpamt.value)
    tipbill.innerHTML = `$ ${tip.toFixed(2)}`
    totalbill.innerHTML = `$ ${(total+tip).toFixed(2)}`
})
ten.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inpamt.value=="" || numpeople.value==""){
        return
    }
    let tip = ((inpamt.value*10)/100)/numpeople.value
    parseFloat(tip)
    tip.toFixed(2)
    let total= Number(inpamt.value)
    tipbill.innerHTML = `$ ${tip.toFixed(2)}`
    totalbill.innerHTML = `$ ${(total+tip).toFixed(2)}`
})
fifteen.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inpamt.value=="" || numpeople.value==""){
        return
    }
    let tip = ((inpamt.value*15)/100)/numpeople.value
    parseFloat(tip)
    tip.toFixed(2)
    let total= Number(inpamt.value)
    tipbill.innerHTML = `$ ${tip.toFixed(2)}`
    totalbill.innerHTML = `$ ${(total+tip).toFixed(2)}`
})
twentyfive.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inpamt.value=="" || numpeople.value==""){
        return
    }
    let tip = ((inpamt.value*25)/100)/numpeople.value
    parseFloat(tip)
    tip.toFixed(2)
    let total= Number(inpamt.value)
    tipbill.innerHTML = `$ ${tip.toFixed(2)}`
    totalbill.innerHTML = `$ ${(total+tip).toFixed(2)}`
})
fifty.addEventListener("click",(e)=>{
    e.preventDefault()
    if(inpamt.value=="" || numpeople.value==""){
        return
    }
    let tip = ((inpamt.value*50)/100)/numpeople.value
    parseFloat(tip)
    tip.toFixed(2)
    let total= Number(inpamt.value)
    tipbill.innerHTML = `$ ${tip.toFixed(2)}`
    totalbill.innerHTML = `$ ${(total+tip).toFixed(2)}`
})
