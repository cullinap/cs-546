// alert('connected')

function checkPrimeNumber(number){
    //if num == 1 or 0 
    for(let i = 2, s = Math.sqrt(number); i <= s; ++i)
        if(number % i === 0) return false
    return true
}

function myValidation(){
    let myValue = document.getElementById('myform').value;

    //isNaN(myValue) || myValue < 1 || myValue > 20
    // alert(checkPrimeNumber(myValue))

    if (checkPrimeNumber(myValue)) {
        document.getElementById('demo').innerHTML = myValue + ' ' + 'prime'
    } else {
        document.getElementById('demo').innerHTML = myValue + ' ' + 'not prime'
    }
}



// document.querySelector('#myform').addEventListener('input', (event)=>{
//     console.log(event.target.value)
// })

