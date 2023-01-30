//Junior javascript solution :D 

function Calculator(){
    
    let arrOperators = ["+", "-"];
    let funcsOperators = [(a, b) => a + b, (a,b) => a - b];

    this.calculate = function(sentance){
        let parsedSentance = sentance.split(' ');
        const indexOfOperator = arrOperators.indexOf(parsedSentance[1]);
        return funcsOperators[indexOfOperator](+parsedSentance[0], +parsedSentance[2]);
    };
    
    this.addMethod = function(name, func) {
        if(arrOperators.includes(name) && typeof(func) == Function) {
            return;
        } 

        arrOperators.push(name);
        funcsOperators.push(func);
    };
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7"));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 ** 3");
console.log(result);

//god solution
{
    function Calculator() {

        this.methods = {
          "-": (a, b) => a - b,
          "+": (a, b) => a + b
        };
      
        this.calculate = function(str) {
      
          let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
      
          if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
          }
      
          return this.methods[op](a, b);
        };
      
        this.addMethod = function(name, func) {
          this.methods[name] = func;
        };
      }
}