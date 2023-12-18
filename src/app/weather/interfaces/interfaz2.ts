export interface ArrayGeocoding {
    type:        string;
    features:    Feature[];
    query:       string[];
    attribution: string;
}

export interface Feature {
    type:       string;
    properties: Properties;
    geometry:   Geometry;
    bbox:       number[];
    center:     number[];
    place_name: string;
    place_type: string[];
    relevance:  number;
    context:    Context[];
    id:         string;
    text:       string;
}

export interface Context {
    ref:          string;
    country_code: CountryCode;
    kind:         Kind;
    id:           string;
    text:         string;
    wikidata:     string;
}

export enum CountryCode {
    Ch = "ch",
    Nl = "nl",
    Us = "us",
}

export enum Kind {
    AdminArea = "admin_area",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    ref:          string;
    country_code: CountryCode;
    kind:         Kind;
    wikidata:     string;
}
