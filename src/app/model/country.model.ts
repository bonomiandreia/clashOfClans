export class modelCountry {

    public clanLevel: number;
    public clanPoints: number;
    public location: Location =  new Location();
    public members: string
    public tag: string
    public name: string
    public rank: number
    public previousRank: number;
    public badgeUrls: any
}

class Location {
    public localizedName: string;
    public id: number;
    public name: string;
    public isCountry: boolean
    public countryCode: string;
}