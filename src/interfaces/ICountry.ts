export interface ICountry {
    "name": {
        "common": string
    };
}

export interface ICountryInformation {
    "name": {
        "common": string
    };
    "capital": string;
    "region": string;
    "population": string;
    "flags": {
        png: string;
        svg: string;
    };
    "borders": string[];
}