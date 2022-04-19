$(document).ready(function () {
  let allShowsUrl = "http://api.tvmaze.com/shows";
  let invShowUrl = "http://api.tvmaze.com/search/shows?q=";

  $.get(allShowsUrl, function (showname) {
    // alert(showname[0].name)
    // alert(showname[0]._links.self.href)
    for (let i = 0; i <= showname.length; ++i) {
      $("#showList")
        .append(
          `<li><a href="${showname[i]._links.self.href}">${showname[i].name}</a></li>`
        )
        .show();
    }
  });

  $("#searchForm").submit(function (event) {
    event.preventDefault();

    let searchTerm = $("#search_term").val();
    alert(searchTerm)
    $("#showList").empty();

    $.get(
      `http://api.tvmaze.com/search/shows?q=${searchTerm}`,
      function (showname) {
        for (show of showname) {
          $("#showList").append(`<li>${show.show.name}</li>`);
        }
      }
    );
  });


});

//https://stackoverflow.com/questions/11240915/how-to-i-append-lis-to-a-current-ul-using-load
