import {Serie} from "./Serie.js";
import {series} from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-body")!;
const detailDiv: HTMLElement = document.getElementById("detail")!;


series.forEach((serie: Serie) => {

  const row = serie.createTableRow(); 

  row.addEventListener("click", () => {
    detailDiv.innerHTML = "";
    detailDiv.appendChild(serie.createDetailCard());
  });
  tableBody.appendChild(row);

});

let totalSeasons = 0;

  series.forEach((s: Serie) => {
    totalSeasons += s.getSeasons();
  })


const average = totalSeasons / series.length;

const averageElement = document.getElementById("average")!;
averageElement.textContent = "Season average: " + average.toFixed(2);