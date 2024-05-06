const perosonPrototype = {
    greet: function() {
        console.log(`Ola, meu nome é ${this.name}`);
    }
};

const objNikael = Object.create(perosonPrototype);
objNikael.name = "Nikael";
objNikael.greet();