import { Element } from "./Element.js";

export interface Document {
    name: string;
    contents: Element[];
    type: string;
}
