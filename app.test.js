greet = require('./app.js').greet;

describe("Tests for Requirement1", () => {
    it("Should return Hello Sam.", () => {
        expect(greet("Sam")).toEqual("Hello, Sam.");
    })
    it("Should return Hello Dylan.", () => {
        expect(greet("Dylan")).toEqual("Hello, Dylan.");
    })
    it("Should return Hello adonis.", () => {
        expect(greet("adonis")).toEqual("Hello, adonis.");
    })
})

describe("Tests for Requirement2", () => {
    it("Should return Hello my friend.", () => {
        expect(greet(null)).toEqual("Hello, my friend.");
    })
    it("Should return Hello my friend.", () => {
        expect(greet()).toEqual("Hello, my friend.");
    })
    it("Should return Hello Sam", () => {
        expect(greet("Sam")).toEqual("Hello, Sam.");
    })
})

describe("Tests for Requirement3", () => {
    it("Should return HELLO BOB", () => {
        expect(greet("BOB")).toEqual("HELLO, BOB!");
    })
    it("Should return hello bob", () => {
        expect(greet("bob")).toEqual("Hello, bob.");
    })
    it("Should return hello Bob", () => {
        expect(greet("Bob")).toEqual("Hello, Bob.");
    })
})

describe("Tests for Requirement4", () => {
    it("Should return Hello Kim and Kanye", () => {
        expect(greet(["Kim", "Kanye"])).toEqual("Hello, Kim and Kanye.");
    })
    it("Should return Hello Jill and Jane", () => {
        expect(greet(["Jill", "Jane"])).toEqual("Hello, Jill and Jane.");
    })
    it("Should return Hello tom and dave", () => {
        expect(greet(["tom", "dave"])).toEqual("Hello, tom and dave.");
    })
})

describe("Tests for Requirment5", () => {
    it("Should return adam, bob and hailey", () => {
        expect(greet(["adam", "bob", "hailey"])).toEqual("Hello, adam, bob and hailey.");

    })
    it("Should return adam, bob, hailey and Dave", () => {
        expect(greet(["adam", "bob", "hailey", "Dave"])).toEqual("Hello, adam, bob, hailey and Dave.");
        
    })
    it("Should return adam, bob, hailey, buster and Dave", () => {
        expect(greet(["adam", "bob", "hailey", "buster", "Dave"])).toEqual("Hello, adam, bob, hailey, buster and Dave.");
        
    }) 
})

describe("Tests for Requirement6", () => {
    it("Should return expected value", () => {
        expect(greet(["john", "james", "JENNY", "joe"])).toEqual("Hello, john, james and joe. AND HELLO JENNY!");
    })
    it("Should return expected value", () => {
        expect(greet(["john", "james", "JENNY", "joe", "CARL"])).toEqual("Hello, john, james and joe. AND HELLO JENNY AND CARL!");
    })
    it("Should return expected value", () => {
        expect(greet(["john", "james", "JENNY", "joe", "ABBY", "CARL"])).toEqual("Hello, john, james and joe. AND HELLO JENNY, ABBY AND CARL!");
    })
})

describe("Tests for Requirement7", () => {
    it("Should return expected value", () => {
        expect(greet(["Bob", "Charlie, Dianne"])).toEqual("Hello, Bob, Charlie and Dianne.");
    })
    it("Should return expected value", () => {
        expect(greet(["Bob", "Charlie, Dianne, Moses"])).toEqual("Hello, Bob, Charlie, Dianne and Moses.");
    })
    it("Should return expected value", () => {
        expect(greet(["Bob", "ALI", "Charlie, Dianne, Moses"])).toEqual("Hello, Bob, Charlie, Dianne and Moses. AND HELLO ALI!");
    })
})

describe("Test for Requirement8", () => {
    it("Should return expected value", () => {
        expect(greet(["Bob", "\"Charlie, Dianne\""])).toEqual("Hello Bob and Charlie, Dianne.");
    })
    it("Should return expected value", () => {
        expect(greet(["Bob", "\"Charlie, Dianne, Joseph\""])).toEqual("Hello Bob and Charlie, Dianne, Joseph.");
    })
    it("Should return expected value", () => {
        expect(greet(["Bob", "Fin", "\"Charlie, Dianne\""])).toEqual("Hello Bob, Fin and Charlie, Dianne.");
    })
})