let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, reciever) {
            if (prop in target) {
                return Reflect.get(...arguments);
            }
            throw new ReferenceError(`Property doesn't exist: "${prop}"`);
        }
    });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist: "age"