let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let readMessages = new WeakMap();

  readMessages.set(messages[0], new Date(2023, 1, 1));

  console.log(readMessages.get(messages[0]));