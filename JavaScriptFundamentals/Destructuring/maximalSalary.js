let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  function topSalary(salaries){

    let items = Object.entries(salaries);

    if(items.length == 0) return null;

    let mostPaid = null;
    let maxSalary = 0;

    for (let [key, value] of items){
        if(maxSalary < value){
            mostPaid = key;
            maxSalary = value;
        }
    }
    
    return [mostPaid, maxSalary];
  }

  console.log(topSalary(salaries));