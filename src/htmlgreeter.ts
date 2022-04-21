import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
    
    tagName: string = "h1";

    constructor(greeting: string, tagName?: string ){ //non-optional parameters must come before optional
        super(greeting);
        if (tagName) { //if a tagName parameter is entered
            this.tagName = tagName;
        }
    }

    greet(name: string){
        return `<${this.tagName}>${this.greeting}, ${name}</${this.tagName}>`
    }
}