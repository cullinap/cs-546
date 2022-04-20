

$(document).ready(function () {
  let allShowsUrl = "http://api.tvmaze.com/shows";
  let invShowUrl = "http://api.tvmaze.com/search/shows?q=";

  function link (showname) {
    $(showname).click(function(event){
        event.preventDefault()
        $("#show").empty()

        let target = event.target.href
        $.get(target, function() {
            $("#show").append(`<h1>hey</h1>`)
        })

        $("#showList").hide()
        $("show").show()

    })
  }

  $.get(allShowsUrl, function (showname) {
    // alert(showname[0].name)
    // alert(showname[0]._links.self.href)

    for(show in showname) {
        console.log(showname[show])
        $("#showList")
        .append(
          `<li><a href="${showname[show]._links.self.href}">${showname[show].name}</a></li>`
        )
    }

    $("#showList").show()

    // for (let i = 0; i <= showname.length; ++i) {
    //   $("#showList")
    //     .append(
    //       `<li><a href="${showname[i]._links.self.href}">${showname[i].name}</a></li>`
    //     ).show()
    // }

   
  });

  $("#searchForm").submit(function (event) {
    event.preventDefault();

    let searchTerm = $("#search_term").val().trim();
    if (searchTerm.length == 0) {
      $("#error").append(`<p>Try another search term</p>`).show();
    }

    $("#showList").empty();

    $.get(invShowUrl + searchTerm, function (showname) {
      for (let i = 0; i <= showname.length; ++i) {
        $("#showList").append(
          `<li><a href="${showname[i].show._links.self.href}">${showname[i].show.name}</a></li>`
        );
      }


    });
  });



});

//https://stackoverflow.com/questions/11240915/how-to-i-append-lis-to-a-current-ul-using-load
