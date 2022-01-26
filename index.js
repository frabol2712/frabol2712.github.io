const runbtn = document.querySelector("button")
const amnt = document.querySelector("input")
const result = document.querySelector("label")
const center = document.getElementById("main")
function pick(ar) {
    let keys = Object.keys(ar)
    let ranNumber = Math.random() * keys.length
    let a = keys[Math.floor(ranNumber)]
    return a
}
function newDiv(clr) {
    let a = document.createElement("div")
    a.style.backgroundColor = clr 
    a.style.width = "50px"
    a.style.height = "50px"
    center.appendChild(a)
}
function newSpaceDiv(bool) {
    let b = document.createElement("div")
    if (bool === false || !bool) {
        b.style.backgroundColor = "rgba(0,0,0,0)"
    } else {
        b.style.backgroundColor = "rgba(255,20,20,1)"
    }
    b.style.width = "10px"
    b.style.height = "50px"
    center.appendChild(b)
}
function clearDiv() {
    if (center.children.length > 0) {
        do {
            center.removeChild(center.firstChild)
        } while (center.children.length > 0)
    }
}
function clearNecessary() {
    if (center.children.length > 20) {
        do {
            center.removeChild(center.firstChild)
        } while (center.children.length > 20)
    }
}
runbtn.onclick = function() {
    clearDiv()
    let max = Number(amnt.value)
    let right = 0
    for (let amountofRounds = 1; amountofRounds < max+1; amountofRounds++) {
        let properties = {
            "white":4,
            "blue":3,
            "black":3
        }
        let first = pick(properties)
        properties[first] = properties[first] - 1
        let second = pick(properties)
        if (first === second) {
            right++
        }
        if (!center.parentElement.hidden) {
            newDiv(first)
            newSpaceDiv()
            newDiv(second)
            newSpaceDiv(true)
        }  
        if (center.children.length > 20) {
            clearNecessary()
        }
    }
    result.style = ""
    result.textContent = right + " de " + max + " / " + String(Math.floor(100000*(right/max))/1000) + "% par"
}
