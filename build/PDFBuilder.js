import { PDF } from "./PDF.js";
export class PDFBuilder {
    constructor() {
        this.elements = [];
    }
    addPage() {
        this.elements.push({ type: 'page', content: '' });
        return this;
    }
    addTitle(content) {
        this.elements.push({ type: 'title', content });
        return this;
    }
    addSubtitle(content) {
        this.elements.push({ type: 'subtitle', content });
        return this;
    }
    addParagraph(content) {
        this.elements.push({ type: 'paragraph', content });
        return this;
    }
    reset() {
        this.elements = [];
        return this;
    }
    build(filename) {
        return new PDF(filename, this.elements, '1.0', false, '');
    }
}
