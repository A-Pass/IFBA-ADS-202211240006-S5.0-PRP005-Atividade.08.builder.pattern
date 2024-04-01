export class PDF implements Document {
    constructor(name, elements, version, isProtected, password) {
        this.name = name;
        this.version = version;
        this.isProtected = isProtected;
        this.password = password;
        this.type = 'PDF';
        this.contents = elements;
        this.name = `${this.name}.pdf`;
    }
}
