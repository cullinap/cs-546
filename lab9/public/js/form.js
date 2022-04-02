// alert('connected')

function checkPrimeNumber(number){
    //if num == 1 or 0 
    for(let i = 2, s = Math.sqrt(number); i <= s; ++i)
        if(number % i === 0) return false
    return true
}

function elementPlacer(value, msg) {
    let ul = document.getElementById('list');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(value + msg));
    ul.appendChild(li);
}

function main(){
    let myValue = document.getElementById('myform').value;
    if (isNaN(myValue)) {
        alert('you must enter an integer')
        return
    }

    if (checkPrimeNumber(myValue)) {
        elementPlacer(myValue, ' is a prime number')
    } else {
        elementPlacer(myValue, ' is not a prime number')
    }
}



// document.querySelector('#myform').addEventListener('input', (event)=>{
//     console.log(event.target.value)
// })

