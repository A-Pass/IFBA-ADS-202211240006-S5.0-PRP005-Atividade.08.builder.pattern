import { Document } from "./Document.js";
import { Element } from "./Element.js";

export class DOCX implements Document {
    public contents: Element[] = [];
    public name: string;

    public constructor(name: string, public type: string, public version: string) {
        this.name = `${name}.${this.type.toLocaleLowerCase()}`;
    }
    
    public addPage() {
        this.contents.push({type : 'page', content: ''});
    }

    public addTitle(content: string) {
        this.contents.push({type: 'title', content});
    }

    public addSubtitle(content: string) {
        this.contents.push({type: 'subtitle', content});
    }

    public addParagraph(content: string) {
        this.contents.push({type: 'paragraph', content});
    }
}
