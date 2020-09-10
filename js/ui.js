const globalRecord = (globalRec) => {
  document.getElementById(
    "totalConfirmed"
  ).innerText = globalRec.TotalConfirmed.toLocaleString("en");
  document.getElementById(
    "newConfirmed"
  ).innerText = `+${globalRec.NewConfirmed.toLocaleString("en")}`;
  document.getElementById("totalActive").innerText = (
    globalRec.TotalConfirmed - globalRec.TotalRecovered
  ).toLocaleString("en");
  document.getElementById("newActive").innerText = `+${(
    globalRec.NewConfirmed - globalRec.NewRecovered
  ).toLocaleString("en")}`;
  document.getElementById(
    "totalRecovered"
  ).innerText = globalRec.TotalRecovered.toLocaleString("en");
  document.getElementById(
    "newRecovered"
  ).innerText = `+${globalRec.NewRecovered.toLocaleString("en")}`;
  document.getElementById(
    "totalDeath"
  ).innerText = globalRec.TotalDeaths.toLocaleString("en");
  document.getElementById(
    "newDeath"
  ).innerText = `+${globalRec.NewDeaths.toLocaleString("en")}`;
};

const recordPerCountryCode = (countryClicked) => {
  let recordPerCountry = `<h6><strong>${countryClicked.Country}</strong></h6>
  <div class="row">
    <div class="col-5 m-2 pt-2 text-center rounded border">
      <p class="text-muted">Total Cases</p>
      <h6 id="country-total-case" class="text-primary">${countryClicked.TotalConfirmed.toLocaleString(
        "en"
      )}</h6>
    </div>
    <div class="col-5 m-2 pt-2 text-center rounded border">
      <p class="text-muted">Active Cases</p>
      <h6 id="country-active-cases" class="text-danger">${(
        countryClicked.TotalConfirmed - countryClicked.TotalRecovered
      ).toLocaleString("en")}</h6>
    </div>
    <div class="col-5 m-2 pt-2 text-center rounded border">
      <p class="text-muted">Recovered</p>
      <h6 id="country-recovered" class="text-success">${countryClicked.TotalRecovered.toLocaleString(
        "en"
      )}</h6>
    </div>
    <div class="col-5 m-2 pt-2 text-center rounded border">
      <p class="text-muted">Total Deaths</p>
      <h6 id="country-total-death" class="text-danger">${countryClicked.TotalDeaths.toLocaleString(
        "en"
      )}</h6>
    </div>
    <div class="col-5 m-2 pt-2 text-center rounded border">
      <p class="text-muted">New Cases</p>
      <h6 id="country-new-cases" class="text-primary">${countryClicked.NewConfirmed.toLocaleString(
        "en"
      )}</h6>
    </div>
    <div class="col-5 m-2 pt-2 text-center rounded border">
      <p class="text-muted">New Deaths</p>
      <h6 id="country-new-death" class="text-danger">${countryClicked.NewDeaths.toLocaleString(
        "en"
      )}</h6>
    </div>`;

  document.getElementById("country").innerHTML = recordPerCountry;
};
const topCountries = (value) => {
  let topRated = `
    ${value
      .map((cased) => {
        return `<li class="list-group-item border-0 font-weight-bold `${if(value[0]){'active'}}` d-flex align-items-center pointer top-countries" id = ${
          cased.CountryCode
        }>
        <img src="https://www.countryflags.io/${
          cased.CountryCode
        }/shiny/32.png"class="img-fluid mr-2"/>
        ${cased.Country}
        <div class="ml-auto text-primary">${cased.TotalConfirmed.toLocaleString(
          "en"
        )}</div>
      </li>`;
      })
      .join("")}
    `;
  let casedDiv = document.getElementById("top-cases");
  casedDiv.innerHTML = topRated;
};
