const upperLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const downLetters = [...'abcdefghijklmnopqrstuvwxyz']
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const symbols = [...'~!@#$%^&*+-=_/|)(:;"']
const output = document.querySelector('#output');
const generate = document.querySelector('#generate')
let copy = document.querySelector('#copy')
let rangeValue = document.getElementById('rangeValue')
let progressBar = document.getElementById('progressBar')
let range = document.getElementById('slider')
let lowerCaseSelector = document.querySelector('#lowercase')
let upperCaseSelector = document.querySelector('#uppercase')
let numbersSelector = document.querySelector('#numbers')
let symbolSelector = document.querySelector('#specialSymbols')

rangeValue.innerHTML = range.value
range.oninput = function () {
    rangeValue.innerHTML = this.value
    rangeValue.style.left = this.value + '%'
    progressBar.style.width = (parseFloat(this.value) - 4) * 3.85 + '%'
}
let randomData = []
let data = []
function passwordCreate() {
    let data = []
    let randomData = []
    for (let i = 0; data.length < range.value; i++) {
        if (document.querySelector('#lowercase').checked == false && document.querySelector('#uppercase').checked == false && document.querySelector('#numbers').checked == false && document.querySelector('#specialSymbols').checked == false) {
            return output.value = 'Choose any selector;)'
        }

        if (document.querySelector('#lowercase').checked == true) {
            let randomDownSymbol = Math.floor(Math.random() * downLetters.length)
            data.push(downLetters[randomDownSymbol])
        }
        if (document.querySelector('#uppercase').checked == true) {
            let randomUpperSymbol = Math.floor(Math.random() * upperLetters.length)
            data.push(upperLetters[randomUpperSymbol])
        }
        if (document.querySelector('#numbers').checked == true) {

            let randomNumbersSymbol = Math.floor(Math.random() * numbers.length)
            data.push(numbers[randomNumbersSymbol])
        }

        if (document.querySelector('#specialSymbols').checked == true) {
            let randomSymbolsSymbol = Math.floor(Math.random() * symbols.length)
            data.push(symbols[randomSymbolsSymbol])
        }

    }
    if (data.length > range.value) {
        data.splice(range.value, data.length - range.value)
    }
    console.log(data)
    randomData = data.map(i => [Math.random(), i]).sort().map(i => i[1])
    return output.value = randomData.join('')
}

function copyPassword() {
    navigator.clipboard.writeText(output.value)
        .then(() => {
            alert('Copied')
        })
        .catch(() => {
            alert('Something wrong!')
        })
}

copy.onclick = copyPassword
generate.onclick = passwordCreate
range.onchange = passwordCreate
lowerCaseSelector.onclick = passwordCreate
upperCaseSelector.onclick = passwordCreate
numbersSelector.onclick = passwordCreate
symbolSelector.onclick = passwordCreate



