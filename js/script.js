// AOS.init();
let eachTopCountries = document.getElementsByClassName("top-countries");
$(document).ready(function () {
  $(".navbar-toggler").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

let update = document.getElementsByClassName("updated-time");

let casedDiv = document.getElementById("top-cases");
fetch("https://api.covid19api.com/summary")
  .then((res) => res.json())
  .then((res) => andle(res))
  .catch((error) => errorAlert());

const errorAlert = () => {
  alert(
    `Unable to fetch data. Check your internet connection and refresh this page`
  );
};

const andle = (array) => {
  if (array.Message === "Caching in progress") {
    alert(`Collating today's updated result, check back later`);
  } else {
    let topCases = [];
    globalRecord(array.Global);
    array.Countries.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    for (let i = 0; i < 5; i++) {
      topCases.push(array.Countries[i]);
    }
    topCountries(topCases);
    dateUpdate(date);
    recordPerCountryCode(topCases[0]);

    // eachTopCountries[0].classList.add("active");

    casedDiv.addEventListener("click", (event) => {
      let theEvent;
      if (event.target.classList.contains("list-group-item")) {
        theEvent = event.target.id;
      } else if (
        event.target.parentElement.classList.contains("list-group-item")
      ) {
        theEvent = event.target.parentElement.id;
      }
      for (let i = 0; i < topCases.length; i++) {
        if (theEvent === topCases[i].CountryCode) {
          let countryClicked = topCases[i];
          recordPerCountryCode(countryClicked);
        }
      }
    });
    for (var i = 0; i < eachTopCountries.length; i++) {
      eachTopCountries[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    document.getElementById("body").classList.remove("d-none");
    document.getElementById("loading").classList.add("d-none");
  }
};

let date = new Date();
const dateUpdate = (date) => {
  let month = date.getMonth();
  let todaysDate = date.getDate();
  let year = date.getFullYear();
  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sept";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }
  for (let i = 0; i < update.length; i++) {
    update[i].innerText = `${month} ${todaysDate}, ${year}`;
  }
};
