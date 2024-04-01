import { DOCX } from "./DOCX.js";
export class DOCXBuilder {
    constructor() {
        this.document = new DOCX('', 'DOCX', '1.0');
    }
    addPage() {
        this.document.addPage();
        return this;
    }
    addTitle(content) {
        this.document.addTitle(content);
        return this;
    }
    addSubtitle(content) {
        this.document.addSubtitle(content);
        return this;
    }
    addParagraph(content) {
        this.document.addParagraph(content);
        return this;
    }
    reset() {
        this.document = new DOCX('', 'DOCX', '1.0');
        return this;
    }
    build(filename) {
        this.document.name = filename;
        return this.document;
    }
}
