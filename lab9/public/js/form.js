// alert('connected')


function checkPrimeNumber(number){
    if(number == 1 || number == 0)
        return false
    
    for(let i = 2, s = Math.sqrt(number); i <= s; ++i)
        if(number % i === 0) return false
    return true
}

function colorMeElement(ele, isPrime){
    if(isPrime)
        return ele.classList.add('is-prime')
    return ele.classList.add('not-prime')
}

function elementPlacer(value, msg, isPrime) {
    let ul = document.getElementById('attempts');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(value + msg));
    colorMeElement(li, isPrime)
    ul.appendChild(li);
}

function isInt(value) {
    let x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}

function main(){
    let myValue = document.getElementById('myform').value;


    if (isNaN(myValue) || !isInt(myValue)) {
        alert('you must enter an integer')
        return
    }

    if (checkPrimeNumber(myValue)) {
        elementPlacer(myValue, ' is a prime number', true)
    } else {
        elementPlacer(myValue, ' is not a prime number', false)
    }
}


