import { Document } from "./Document.js";
import { Element } from "./Element.js";

export class PDF implements Document {
    constructor(
        public name: string, 
        elements: Element[], 
        public version: string, 
        public isProtected: boolean,
        public password: string
        ) {
            this.contents = elements;
            this.name = `${this.name}.pdf`
        }
    public contents: Element[];
    public type: string = 'PDF';

}
