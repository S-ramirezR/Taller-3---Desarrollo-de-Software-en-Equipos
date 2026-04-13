export declare class Serie {
    private id;
    private name;
    private channel;
    private seasons;
    private description;
    private website;
    private poster;
    constructor(id: number, name: string, channel: string, seasons: number, description: string, website: string, poster: string);
    getId(): number;
    getName(): string;
    getChannel(): string;
    getSeasons(): number;
    createTableRow(): HTMLTableRowElement;
    createDetailCard(): HTMLDivElement;
}
//# sourceMappingURL=Serie.d.ts.map