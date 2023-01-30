let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  function printListLoop(list) {
    let next = list;
    do {
        console.log(next.value);
        next = next.next;
    } while (next != null);

    // while (next) {
    //     console.log(next.value);
    //     next = next.next;
    //   }
  }

  printListLoop(list);

  function printListRecursive(list) {
    console.log(list.value);
    if(list.next != null) printListRecursive(list.next);
  }

  printListRecursive(list);