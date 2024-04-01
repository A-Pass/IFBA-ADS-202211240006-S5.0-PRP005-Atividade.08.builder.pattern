export class DocumentDirector {
    constructor(builder) {
        this.builder = builder;
    }
    createContract(content, filename) {
        this.builder.reset();
        this.builder
            .addTitle('Titulo 1');
        for (let i = 0; i < content.length; i++) {
            this.builder
                .addSubtitle(`Subtitle ${i + 1}`)
                .addParagraph(content[i]);
        }
        return this.builder.build(filename);
    }
}
