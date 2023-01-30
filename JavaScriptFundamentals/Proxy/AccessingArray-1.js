let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, property, reciever) {
        if (property < 0) {
            property = +property + target.length;
        }
        return Reflect.get(target, property, reciever);
    }
});

console.log(array[-1]); // 3, the last element
console.log(array[-2]); // 2, one step from the end
console.log(array[-3]); // 1, two steps from the end

