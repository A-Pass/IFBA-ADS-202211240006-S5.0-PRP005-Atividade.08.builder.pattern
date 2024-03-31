export class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton._instance)
            Singleton._instance = new Singleton();
        return Singleton._instance;
    }
    get value() {
        return Singleton._currentValue;
    }
    set value(value) {
        Singleton._currentValue = value;
    }
}
export class PrinterPool {
    constructor() {
        this._jobs = [];
    }
    static getInstance() {
        if (!PrinterPool._instance)
            PrinterPool._instance = new PrinterPool();
        return PrinterPool._instance;
    }
    addJob(job) {
        this._jobs.unshift(job);
    }
    getNextJob() {
        return this._jobs.pop();
    }
    listJobs() {
        return this._jobs;
    }
}
export class AdvancedPrinterPool {
    constructor(name) {
        this._jobs = [];
        this._name = name;
    }
    static getInstance(poolName) {
        if (!AdvancedPrinterPool._instances.has(poolName))
            AdvancedPrinterPool._instances.set(poolName, new AdvancedPrinterPool(poolName));
        return AdvancedPrinterPool._instances.get(poolName);
    }
    addJob(job) {
        this._jobs.unshift(job);
    }
    getNextJob() {
        return this._jobs.pop();
    }
    listJobs() {
        return this._jobs;
    }
}
