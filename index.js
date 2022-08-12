const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce((accumulator, currentBattery) => accumulator + currentBattery, 0);


// reduce( callBack function(accumalator, current value) {functions logic}, starting value );


// reduce
// gets called on collection of values (in this case our array batteryBatches)
// takes ac














// incomingStudents.reduce(function(showcases, student) { showcases[studentSorter.showcaseAssign(student)].push(student)}, allShowcases)

// allShowcases["Visual"] //=> [yishayGarbasz, wuTsang, mickaleneThomas]


// const products = [
//     { name: 'Shampoo', price: 4.99 },
//     { name: 'Donuts', price: 7.99 },
//     { name: 'Cookies', price: 6.49 },
//     { name: 'Bath Gel', price: 13.99 }
//   ];

//   function getTotalAmountForProducts(products) {
//     let totalPrice = 0;
  
//     for (const product of products) {
//       totalPrice += product.price;
//     };
  
//     return totalPrice;
//   }
  
//   console.log(getTotalAmountForProducts(products)); // LOG: 33.46




//   const couponLocations = [
//     { room: 'Living room', amount: 5 },
//     { room: 'Kitchen', amount: 2 },
//     { room: 'Bathroom', amount: 1 },
//     { room: 'Master bedroom', amount: 7 }
//   ];
  
//   function couponCounter(totalAmount, location) {
//     return totalAmount + location.amount;
//   }
  
//   console.log(couponLocations.reduce(couponCounter, 0)); // LOG: 15

//   const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)

  