export class DOCX implements Document {
    constructor(name, type, version) {
        this.type = type;
        this.version = version;
        this.contents = [];
        this.name = `${name}.${this.type.toLocaleLowerCase()}`;
    }

    addPage() {
        this.contents.push({ type: 'page', content: '' });
    }

    addTitle(content) {
        this.contents.push({ type: 'title', content });
    }

    addSubtitle(content) {
        this.contents.push({ type: 'subtitle', content });
    }

    addParagraph(content) {
        this.contents.push({ type: 'paragraph', content });
    }
}
