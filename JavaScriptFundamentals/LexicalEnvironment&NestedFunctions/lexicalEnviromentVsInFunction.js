//variable count is in function
{
    function makeCounter() {

        function counter() {
            return counter.count++;
        };

        counter.count = 0;

        return counter;
    }

    let counter = makeCounter();

    counter.count = 10; //there you can acces it from outer
    console.log(counter()); // 10
}
//variable count is in LexicalEnviroment
{
    function makeCounter() {
        let count = 0;

        return function () {
            return count++;
        };
    }

    let counter = makeCounter();

    alert(counter()); // 0
    alert(counter()); // 1
    alert(counter()); // 2
    alert(counter()); // 2
}