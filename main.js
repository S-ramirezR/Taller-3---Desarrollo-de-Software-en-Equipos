import { series } from "./data.js";
const tableBody = document.getElementById("series-body");
series.forEach((serie) => {
    const row = serie.createTableRow();
    tableBody.appendChild(row);
});
//# sourceMappingURL=main.js.map