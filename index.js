let count = 0
let countEl = document.getElementById("count-el")


function increment() {
    console.log("Button was clicked")
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl = document.getElementById("save-el")
    saveEl.textContent += countStr

    console.log(count)
}

function reset() {
    count = 0
    countEl.textContent = count
}