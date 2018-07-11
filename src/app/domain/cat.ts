import { Kill } from "./kill";

export class Cat {
    constructor(public id: string, public name: string, public birthday: Date, public kills: Kill[]) {
    }
}
