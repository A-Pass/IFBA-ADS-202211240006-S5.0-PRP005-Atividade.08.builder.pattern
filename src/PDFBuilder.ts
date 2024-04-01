import { Document } from "./Document.js";
import { DocumentBuilder } from "./DocumentBuilder.js";
import { Element } from "./Element.js";
import { PDF } from "./PDF.js";

export class PDFBuilder implements DocumentBuilder {

    private elements: Element[] = [];

    public addPage(): DocumentBuilder {
        this.elements.push({ type: 'page', content: ''})
        return this;
    }

    public addTitle(content: string): DocumentBuilder {
        this.elements.push({ type: 'title', content});
        return this;
    }

    public addSubtitle(content: string): DocumentBuilder {
        this.elements.push({ type: 'subtitle', content})
        return this;

    }

    public addParagraph(content: string): DocumentBuilder {
        this.elements.push({ type: 'paragraph', content});
        return this;

    }

    public reset(): DocumentBuilder {
        this.elements = [];
        return this;
    }

    public build(filename: string): Document {
        return new PDF(filename, this.elements, '1.0', false, '');
    }
}
