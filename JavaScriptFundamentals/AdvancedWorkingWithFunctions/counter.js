function makeCounter() {

    function counter() {
        return counter.count++;
    };
    
    counter.set = value => counter.count = value;
    
    counter.decrease = () => counter.count--;

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

counter.count = 10; //there you can acces it from outer
console.log(counter()); // 10
console.log(counter.decrease());