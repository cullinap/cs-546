// alert('connected')
let form = document.querySelector('.form')

function checkPrimeNumber(number){
    if(number == 1 || number == 0)
        return false

    if(number < 0)
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

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let myValue = document.getElementById("prime").value;
    
    if(myValue.trim() === "" || !isInt(myValue)) {
        alert('you must enter an integer')
        return 
    }
        
    if (checkPrimeNumber(myValue)) {
        elementPlacer(myValue, ' is a prime number', true)
    } else if (myValue < 0) {
        alert('Enter a positive integer value')
    } else {
        elementPlacer(myValue, ' is NOT a prime number', false)
    }
})






