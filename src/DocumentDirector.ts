import { Document } from "./Document.js";
import { DocumentBuilder } from "./DocumentBuilder.js";

export class DocumentDirector {
    constructor(private builder: DocumentBuilder) {
    }

    createContract(content: string[], filename: string): Document {
        this.builder.reset();
        this.builder
            .addTitle('Titulo 1');

        for(let i = 0; i < content.length; i++) {
            this.builder
                .addSubtitle(`Subtitle ${i+1}`)
                .addParagraph(content[i]);
        }
        return this.builder.build(filename);
    }
}
