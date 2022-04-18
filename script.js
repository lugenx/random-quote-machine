function setRandomColor() {
  const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d",
  ];
  let index = Math.floor(Math.random() * colors.length);
  $("body").css("background-color", colors[index]);
}

function getRandomQuote() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
      "X-RapidAPI-Key": config.API_KEY,
    },
  };

  let quote = "";
  let author = "";

  $.ajax(settings).done(function (response) {
    // console.log(response);
    quote = response.content;
    author = response.originator.name;
    //console.log(author)
    $("#text").html("");
    $("#text").html(quote);
    $("#author").html("");
    $("#author").html("- " + author);
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?text=" + `"${quote}" -${author}`
    );
    setRandomColor();
  });
}

$(document).ready(function () {
  getRandomQuote();
  $("#new-quote").click(() => getRandomQuote());
});
