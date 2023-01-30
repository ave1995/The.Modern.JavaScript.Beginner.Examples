let animal = {
    eats: true
};

let rabbit = Object.create(animal, {
    jumps: {
        value: true
    }
});

alert(rabbit.jumps); // true


//We can use Object.create to perform an object cloning more powerful
//than copying properties in for..in:

let clone = Object.create(
    Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
  );