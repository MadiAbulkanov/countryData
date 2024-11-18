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
    "flags": number[];
    "borders": string;
}