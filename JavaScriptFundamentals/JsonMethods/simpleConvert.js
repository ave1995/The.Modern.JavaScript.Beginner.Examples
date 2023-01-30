let user = {
    name: "John Smith",
    age: 35
  };

  let jsonItem = JSON.stringify(user);

  user = JSON.parse(jsonItem);

  console.log(user);