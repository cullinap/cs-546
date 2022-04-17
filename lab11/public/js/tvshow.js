

$( document ).ready(function() {
    let url = 'http://api.tvmaze.com/shows'
    
    $.get(url, function(showname){
        for(let i=0; i<4; ++i) {
            $("#showList").append('<li>an item</li>').show()
        }
    })


    
});



//https://stackoverflow.com/questions/11240915/how-to-i-append-lis-to-a-current-ul-using-load