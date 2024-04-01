import { DOCXBuilder } from "./DOCXBuilder.js";
import { DocumentDirector } from "./DocumentDirector.js";
import { PDFBuilder } from "./PDFBuilder.js";
const docxBuilder = new DOCXBuilder();
const pdfBuilder = new PDFBuilder();
const paragraph = [
    'Paragraph 1',
    'Paragraph 2'
];
let director = new DocumentDirector(pdfBuilder);
let document = director.createContract(paragraph, 'example');
console.log(document, '\n');
director = new DocumentDirector(docxBuilder);
document = director.createContract(paragraph, 'example');
console.log(document, '\n');
