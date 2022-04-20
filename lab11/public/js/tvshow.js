$(document).ready(function () {
  let allShowsUrl = "http://api.tvmaze.com/shows";
  let invShowUrl = "http://api.tvmaze.com/search/shows?q=";

  function linkdata(event) {
    event.preventDefault();
    $("#show").empty();
    $("#showList").hide();

    let name = undefined;
    let image = undefined;
    let language = undefined;
    let gList = "";
    let rating = undefined;
    let network = undefined;
    let summary = undefined;

    let target = event.target.href;
    $.get(target, function (show) {
      if (show.name) {
        name = $("#show").append(`<h1>${show.name}</h2>`);
      } else {
        name = "N/A";
      }

      if (show.image) {
        image = $("#show").append(`<img src="${show.image.medium}">`);
      } else {
        image = $("#show").append(`<img src="${"/public/no_image.jpeg"}">`);
      }

      if (show.language) {
        language = show.language;
      } else {
      }

      if (show.genres) {
        for (let g of show.genres) {
          gList += `<li>${g}</li>`;
        }
        console.log(gList);
      } else {
        let gList = "";
        gList = "<l1>n/a</li>";
      }

      if (show.rating.average) {
        rating = show.rating.language;
      } else {
        rating = 'N/A';
      }

      if (show.network.name) {
        network = show.network.name;
      } else {
        network = 'N/A';
      }

      if (show.summary) {
        summary = show.summary;
      } else {
        summary = 'N/A';
      }

      let output = `
                <dt>
                    <dt>language</dt>
                    <dd>${language}</dd>
                    <dt>Genres</dt>
                    <ul>
                        ${gList}
                    </ul>
                    <dt>rating</dt>
                    <dd>${rating}</dd>
                    <dt>network name</dt>
                    <dl>${network}</dl>
                    <dt>Summary</dt>
                    <dd>${summary}</dd>
                </dt>
            `;

      $("#show").append(output);
      $("#show").show();
    });
  }

  $.get(allShowsUrl, function (showname) {
    // alert(showname[0].name)
    // alert(showname[0]._links.self.href)

    for (show in showname) {
      $("#showList")
        //.append()
        .append(
          `<li><a href="${showname[show]._links.self.href}">${showname[show].name}</a></li>`
        );
    }

    $("#show").hide();

    $("#showList")
      .children()
      .each(function (i, n) {
        n.addEventListener("click", linkdata);
      });

    $("#showList").show();
  });

  $("#searchForm").submit(function (event) {
    event.preventDefault();

    let searchTerm = $("#search_term").val().trim();
    if (searchTerm.length == 0) {
      $("#error").append(`<p>Try another search term</p>`).show();
    }

    $("#showList").empty();

    $.get(invShowUrl + searchTerm, function (showname) {
      for (show of showname) {
          //console.log(show.show.name)
        $("#showList").append(
          `<li><a href="${show.show._links.self.href}">${show.show.name}</a></li>`
        );
      }

      $("#show").hide();

      $("#showList")
        .children()
        .each(function (i, n) {
          n.addEventListener("click", linkdata);
        });

      $("#showList").show();
    });


  });
});

//https://stackoverflow.com/questions/11240915/how-to-i-append-lis-to-a-current-ul-using-load
