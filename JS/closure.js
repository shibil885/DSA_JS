function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2



function innovaBaseModelPrice() {
    basePrice = 1000000
    return (addedPrice) => {
        console.log('Your total Price is', basePrice + addedPrice)
    }
}

let  crysta = innovaBaseModelPrice();
crysta(700000);


let hycross = innovaBaseModelPrice()
hycross(1000000)