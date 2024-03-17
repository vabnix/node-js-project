const greet = (name) => {
    console.log(`Hello, ${name}`)
}

greet("Vaibhav");
greet("Pallabi")

const os = require('os');
console.log(os.platform(),
    os.homedir(),
    os.hostname()
);