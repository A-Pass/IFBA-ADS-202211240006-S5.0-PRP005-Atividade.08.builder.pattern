import { Document } from "./Document.js";

export interface DocumentBuilder {
    addPage(): DocumentBuilder;
    addTitle(content: string): DocumentBuilder;
    addSubtitle(content: string): DocumentBuilder;
    addParagraph(content: string): DocumentBuilder;
    reset(): DocumentBuilder;
    build(filename: string): Document;
}
