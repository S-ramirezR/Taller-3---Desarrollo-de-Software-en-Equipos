class Serie {
    private name: string;
    private channel : string;
    private seasons : number;
    private id : number;
    private description : string;

    constructor(name: string, channel: string, seasons: number, id: number, description: string) {
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.id = id;
        this.description = description;
    }

}