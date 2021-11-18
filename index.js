const prombtn = document.querySelector("#media")
const prominpt = document.querySelector("input[class='media']")
const promplabel = document.querySelector("label[class='media']")
const medianabtn = document.querySelector("#mediana")
const medianainpt = document.querySelector("input[class='mediana']")
const medianalabel = document.querySelector("label[class='mediana']")
const modabtn = document.querySelector("#moda")
const modainpt = document.querySelector("input[class='moda']")
const modalabel = document.querySelector("label[class='moda']")
const desviobtn = document.querySelector("#desvio")
const desvioinpt = document.querySelector("input[class='desvio']")
const desviolabel = document.querySelector("label[class='desvio']")
const varianzabtn = document.querySelector("#varianza")
const varianzainpt = document.querySelector("input[class='varianza']")
const varianzalabel = document.querySelector("label[class='varianza']")
const autoCheck = document.querySelector("input[type='checkbox']")
const help = document.querySelector("#help")
const htext = document.querySelector("#help-text")
prombtn.onclick = function() {
    let array = (prominpt.value).split(",")
    let length = array.length
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total = total + Number(array[i])
    }
    promplabel.textContent = "El promedio es " + String(total/length)
}
medianabtn.onclick = function() {
    let array = (medianainpt.value).split(",")
    let txt = "La mediana es "
    array.forEach((v,i) => {
        array[i] = Number(v)
    })
    array.sort(function(a,b) {
        return a-b;
    })
    if (array.length%2 == 0) {
        let i= Math.floor(array.length/2)
        let i2 = Math.floor(array.length/2)-1
        txt = txt + (array[i]+array[i2])/2
    } else {
        let i2 = Math.floor(array.length/2)
        txt = txt + array[i2]
    }
    medianalabel.textContent = txt + " ("+array+")"
}
modabtn.onclick = function() {
    let array = (modainpt.value).split(",")
    let txt = "La moda es "
    let dictionary = []
    let highest = 0
    let n = 0
    array.forEach((v,i) => {
        if (dictionary[v]) {
            dictionary[v] = dictionary[v] + 1
        } else {
            dictionary[v] = 1
        }
    })
    dictionary.forEach((tend,number) => {
        if (tend > highest) {
            highest = tend
            n = number
        } else if (tend == highest && number > n) {
            n = number
        }
    })
    modalabel.textContent = txt + n + " (" + highest + " repeticiones)"
}
desviobtn.onclick = function() {
    let array = (desvioinpt.value).split(",")
    let txt = "El desvío estandar es "
    let length = array.length
    let total = 0
    let ftotal = 0
    array.forEach((v,i) => {
        array[i] = Number(v)
        total = total + Number(v)
    })
    array.sort()
    let promedio = total/length
    array.forEach((v,i) => {
        let res = Math.abs(promedio - v) **2
        ftotal = ftotal + res
    })
    ftotal = ftotal/length
    desviolabel.textContent = txt + Math.floor(Math.sqrt(ftotal)*1000)/1000
}
varianzabtn.onclick = function() {
    let array = (varianzainpt.value).split(",")
    let txt = "La varianza es "
    let length = array.length
    let total = 0
    let ftotal = 0
    array.forEach((v,i) => {
        array[i] = Number(v)
        total = total + Number(v)
    })
    array.sort()
    let promedio = total/length
    array.forEach((v,i) => {
        let res = Math.abs(promedio - v) ** 2
        ftotal = ftotal + res
    })
    ftotal = ftotal/length
    varianzalabel.textContent = txt + Math.floor((ftotal)*1000)/1000
}
autoCheck.addEventListener("change", function () {
    if (autoCheck.checked === false) {
        
    } else {

    }
})
help.addEventListener("mouseenter",function(){
    htext.hidden = false
})
help.addEventListener("mouseleave", function(){
    htext.hidden = true
})
