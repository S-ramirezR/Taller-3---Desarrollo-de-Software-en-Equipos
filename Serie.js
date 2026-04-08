export class Serie {
    id;
    name;
    channel;
    seasons;
    description;
    website;
    poster;
    constructor(id, name, channel, seasons, description, website, poster) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.id = id;
        this.description = description;
        this.website = website;
        this.poster = poster;
    }
    createTableRow() {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = this.id.toString();
        const nameCell = document.createElement("td");
        nameCell.textContent = this.name;
        const channelCell = document.createElement("td");
        channelCell.textContent = this.channel;
        const seasonsCell = document.createElement("td");
        seasonsCell.textContent = this.seasons.toString();
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(channelCell);
        row.appendChild(seasonsCell);
        return row;
    }
}
//# sourceMappingURL=Serie.js.map