import { DOCX } from "./DOCX.js";
import { Document } from "./Document.js";
import { DocumentBuilder } from "./DocumentBuilder.js";

export class DOCXBuilder implements DocumentBuilder {

    private document: DOCX = new DOCX('', 'DOCX' , '1.0');

    public addPage(): DocumentBuilder {
        this.document.addPage();
        return this;
    }

    public addTitle(content: string): DocumentBuilder {
        this.document.addTitle(content);
        return this;
    }

    public addSubtitle(content: string): DocumentBuilder {
        this.document.addSubtitle(content);
        return this;
    }

    public addParagraph(content: string): DocumentBuilder {
        this.document.addParagraph(content);
        return this;
    }

    public reset(): DocumentBuilder {
        this.document = new DOCX('', 'DOCX' , '1.0');
        return this;
    }

    public build(filename: string): Document {
        this.document.name = filename;
        return this.document;
    }
}
