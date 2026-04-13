import { series } from "./data.js";
const tableBody = document.getElementById("series-body");
const detailDiv = document.getElementById("detail");
series.forEach((serie) => {
    const row = serie.createTableRow();
    row.addEventListener("click", () => {
        detailDiv.innerHTML = "";
        detailDiv.appendChild(serie.createDetailCard());
    });
    tableBody.appendChild(row);
});
let totalSeasons = 0;
series.forEach((s) => {
    totalSeasons += s.getSeasons();
});
const average = totalSeasons / series.length;
const averageElement = document.getElementById("average");
averageElement.textContent = "Season average: " + average.toFixed(2);
//# sourceMappingURL=main.js.map