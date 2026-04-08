import {Serie} from "./Serie.js";
import {series} from "./data.js";

const tableBody: HTMLElement = document.getElementById("series-body")!;


series.forEach((serie: Serie) => {
  const row = serie.createTableRow(); 
  tableBody.appendChild(row);
});