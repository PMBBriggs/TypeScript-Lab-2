import { Greeter, JavaScriptGreeter , LoudGreeter, HtmlGreeter} from "../src";

describe("Greeter", () => {
    test("calling Greeter should return greeting and name", () => {
        // Assert
        let helloName = new Greeter("Hello");

        // Assert
        expect(helloName.greet("Sam")).toBe("Hello, Sam!");

        // when expecting a return needs to be called in expect (Asert and Action needs to be in same line)
    })
    
    test("calling Greeter should return greeting and name", () => {
        // Assert
        let helloName = new Greeter("Hello");

        // Assert
        expect(helloName.greet("Paige")).toBe("Hello, Paige!");

    })
})

describe("JavaScriptGreeter", () => {
    test("calling JavaScriptGreeter should return JS Console Log of greeting and name", () => {
        // Assert
        let helloName = new JavaScriptGreeter("Hello");

        // Assert
        expect(helloName.greet("Sam")).toBe(`console.log('Hello, Sam!')`);

    })
    
    test("calling JavaScriptGreeter should return JS Console Log of greeting and name", () => {
        // Assert
        let helloName = new JavaScriptGreeter("Hello");

        // Assert
        expect(helloName.greet("Paige")).toBe(`console.log('Hello, Paige!')`);

    })
})


describe("LoudGreeter", () => {
    test("calling LoudGreeter should return greeting and name with 2 exclamation points", () => {
        // Assert
        let helloName = new LoudGreeter("Hello", "!");

        // Act
        helloName.addVolume();

        // Assert
        expect(helloName.greet("Sam")).toBe("Hello, Sam!!");

    })
    
    test("calling LoudGreeter should return greeting and name with 3 exclamation points", () => {
        // Assert
        let helloName = new LoudGreeter("Hello", "!");

        // Act
        helloName.addVolume();
        helloName.addVolume();

        // Assert
        expect(helloName.greet("Sam")).toBe("Hello, Sam!!!");

    })
})

describe("HtmlGreeter", () => {
    test("calling HtmlGreeter should return greeting and name with h1 tags if no tags are given", () => {
        // Assert
        let helloName = new HtmlGreeter("Hello");

        // Assert
        expect(helloName.greet("Sam")).toBe("<h1>Hello, Sam</h1>");

    })
   
    test("calling HtmlGreeter should return greeting and name with p tags", () => {
        // Assert
        let helloName = new HtmlGreeter("Hello", "p");

        // Assert
        expect(helloName.greet("Sam")).toBe("<p>Hello, Sam</p>");

    })
})
