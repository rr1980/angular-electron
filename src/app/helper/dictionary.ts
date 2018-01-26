
export interface IDictionary {
    get(key: string): any;
    add(key: string, value: any): void;
    remove(key: string): void;
    keys(): string[];
    values(): any[];
}

export class Dictionary {

    _keys: string[] = [];
    _values: any[] = [];

    constructor() {
    }

    get(key: string) {
        var index = this._keys.indexOf(key, 0);
        return this._values[index];
    }

    add(key: string, value: any) {
        var a = this.get(key);
        if (!a) {
            this._keys.push(key);
            this._values.push(value);
        }
        else {
            var index = this._keys.indexOf(key);
            this._values[index] = value;
        }
    }

    remove(key: string) {
        var a = this.get(key);
        if (a) {
            var index = this._keys.indexOf(key);
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
        }
    }

    keys(): string[] {
        return this._keys;
    }

    values(): any[] {
        return this._values;
    }
}
