class SmallestIntegerFinder {
   findSmallestInt(args) {
      let small = args[0];
      for (let i = 0; i < args.length; i++) {
         if (args[i] < small) {
            small = args[i];
         }
      }
      return small;
   }
}


class SmallestIntegerFinder {
   findSmallestInt(args) {
      return Math.min.apply(null, args);
   }
}


class SmallestIntegerFinder {
   findSmallestInt(args) {
      args.sort(function (a, b) {
         return a - b;
      })
      return args[0];
   }
}


var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8);
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12);
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]), 56);
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0);
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1);