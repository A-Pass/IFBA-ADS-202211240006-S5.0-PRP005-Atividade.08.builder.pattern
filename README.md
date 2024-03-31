# Atividade: Implementar o padrão Builder

| | | 
|-|-|
|Disciplina | Padrões de Projeto
|Termos | TypeScript; CLI; StackBlitz; Programação Orientada a Objetos; Padrões de Projeto; Builder

Você está desenvolvendo um conjunto de classes para um editor de textos que
será responsável por exportar o seu formato fechado para arquivos do tipo PDF e Word (.docx). Para isso, você decidiu usar o padrão de projeto Builder.

O seu documento é composto de elementos (tipo Element no diagrama de classes). Cada elemento é de um tipo (título, subtítulo, parágrafo ou página) e possui um conteúdo (a página possui um conteúdo vazio).

O código cliente vai ler o seu documento e chamar uma das classes builder para exportá-lo. Mas você não precisa implementar isso, podendo apenas simular. Por exemplo, o código cliente...

    const b = new PDFBuilder();
    const file = b
        .addTitle('Título 1')
        .addSubtitle('Subtitulo 1')
        .addParagraph('Parágrafo 1')
        .addSubtitle('Subtitulo 2')
        .addParagraph('Parágrafo 2')
        .build('exemplo');
    }
    console.log(file);

... deve gerar a saída no terminal:


    PDF {
        name: 'exemplo.pdf',
        content: [
            { type: 'title', content: 'Título 1' },
            { type: 'subtitle', content: 'Subtitulo 1' },
            { type: 'paragraph', content: 'Parágrafo 1' },
            { type: 'subtitle', content: 'Subtitulo 2' },
            { type: 'paragraph', content: 'Parágrafo 2' }
        ],
        version: '1.0',
        isProtected: false,
        password: '',
        type: 'PDF'
    }

Se utilizar um builder de DOCX...

    const b = new DOCXBuilder();
    const file = b
        .addTitle('Título 1')
        .addSubtitle('Subtitulo 1')
        .addParagraph('Parágrafo 1')
        .addSubtitle('Subtitulo 2')
        .addParagraph('Parágrafo 2')
        .build('exemplo');
    }
    console.log(file);

... a saída será:

    DOCX {
        name: 'exemplo.docx',
        content: [
            { type: 'title', content: 'Título 1' },
            { type: 'subtitle', content: 'Subtitulo 1' },
            { type: 'paragraph', content: 'Parágrafo 1' },
            { type: 'subtitle', content: 'Subtitulo 2' },
            { type: 'paragraph', content: 'Parágrafo 2' }
        ],
        version: '1.0',
        type: 'DOCX'
    }

Você também deve implementar uma classe diretora ( DocumentDirector ) que deve possuir uma função que já automatiza os passos para criar um contrato (ele recebe um array de strings que representam os parágrafos do contrato). O builder a ser utilizado pelo diretor lhe é passado como parâmetro.

Segue abaixo o código Mermaid do diagrama de classes.


    classDiagram
    class DocumentBuilder {
        <<interface>>
        + addPage() DocumentBuilder
        + addTitle(content: string) DocumentBuilder
        + addSubtitle(content: string) DocumentBuilder
        + addParagraph(content: string) DocumentBuilder
        + reset() DocumentBuilder
        + build(filename: string) Document
    }
    class Element {
        + type: "title" | "subtitle" | "paragraph" | "page"
        + content: string;
    }

    class Document {
        <<interface>>
        + name: string;
        + contents: Array~Element~;
        + type: string;
    }
    class PDF {
        + version: string
        + isProtected: boolean
        + password: string
        + constructor(name: string, elements: Array~Element~, ve
    }
    class DOCX {
        + version: string;
        + constructor(name: string, type: string, version: strin
        + addPage()
        + addTitle(content: string)
        + addSubtitle(content: string)
        + addParagraph(content: string)
    }
    class PDFBuilder {
        - elements: Array~Element~
    }
    class DOCXBuilder {
        - document: DOCX
    }
    class DocumentDirector {
        - builder: DocumentBuilder
        + constructor(builder: DocumentBuilder)
        + createContract(content: Array~string~, filename: strin
    }
    DocumentBuilder <|-- PDFBuilder
    DocumentBuilder <|-- DOCXBuilder
    PDF --|> Document
    DOCX --|> Document
    PDFBuilder --> PDF
    DocumentBuilder --> Document
    DocumentDirector o-- DocumentBuilder
    Document o-- Element
    DOCXBuilder o-- DOCX

Perceba que as classes PDFBuilder e DOCXBuilder possuem estratégias diferentes na sua construção. PDFBuilder guarda todos os passos em seu atributo elements e, no método build, constrói o produto todo de uma vez. Diferentemente, a classe DOCXBuilder que repassa todos os passos de construção para o objeto DOCX e, no método build, só retorna o objeto que foi criado pouco a pouco. Ambas são metodologias válidas no padrão Builder.

Envie o código do projeto compactado através do Google Classroom.

```mermaid
classDiagram
    class DocumentBuilder {
        <<interface>>
        + addPage() DocumentBuilder
        + addTitle(content: string) DocumentBuilder
        + addSubtitle(content: string) DocumentBuilder
        + addParagraph(content: string) DocumentBuilder
        + reset() DocumentBuilder
        + build(filename: string) Document
    }
    class Element {
        + type: "title" | "subtitle" | "paragraph" | "page"
        + content: string;
    }

    class Document {
        <<interface>>
        + name: string;
        + contents: Array~Element~;
        + type: string;
    }
    class PDF {
        + version: string
        + isProtected: boolean
        + password: string
        + constructor(name: string, elements: Array~Element~, ve
    }
    class DOCX {
        + version: string;
        + constructor(name: string, type: string, version: strin
        + addPage()
        + addTitle(content: string)
        + addSubtitle(content: string)
        + addParagraph(content: string)
    }
    class PDFBuilder {
        - elements: Array~Element~
    }
    class DOCXBuilder {
        - document: DOCX
    }
    class DocumentDirector {
        - builder: DocumentBuilder
        + constructor(builder: DocumentBuilder)
        + createContract(content: Array~string~, filename: strin
    }
    DocumentBuilder <|-- PDFBuilder
    DocumentBuilder <|-- DOCXBuilder
    PDF --|> Document
    DOCX --|> Document
    PDFBuilder --> PDF
    DocumentBuilder --> Document
    DocumentDirector o-- DocumentBuilder
    Document o-- Element
    DOCXBuilder o-- DOCX
``````