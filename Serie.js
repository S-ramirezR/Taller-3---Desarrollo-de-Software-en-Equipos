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
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getChannel() {
        return this.channel;
    }
    getSeasons() {
        return this.seasons;
    }
    createTableRow() {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        idCell.textContent = this.id.toString();
        const nameCell = document.createElement("td");
        const nameLink = document.createElement("span");
        nameLink.textContent = this.name;
        nameLink.className = "serie-link";
        nameCell.appendChild(nameLink);
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
    createDetailCard() {
        const card = document.createElement("div");
        card.className = "card text-white bg-dark mb-3";
        const img = document.createElement("img");
        img.className = "card-img-top";
        img.src = this.poster;
        img.style.width = "100%";
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = this.name;
        const description = document.createElement("p");
        description.className = "card-text";
        description.textContent = this.description;
        const link = document.createElement("a");
        link.href = this.website;
        link.textContent = "More info";
        link.target = "_blank";
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardBody);
        return card;
    }
}
//# sourceMappingURL=Serie.js.map