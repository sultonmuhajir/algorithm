/*
|--------------------------------------------------------------------------
| Basic subclasses - Adam and Eve
|--------------------------------------------------------------------------
|
*/

class God {
   static create() {
      return [new Man(), new Woman()];
   }
}
class Human {}
class Man extends Human {}
class Woman extends Human {}


class God {
   static create() {
      return [new Man("Adam"), new Woman("Eve")];
   }
}
class Human {
   constructor(name) {
      this.name = name;
   }
}
class Man extends Human {
   constructor(name) {
      super(name);
   }
}
class Woman extends Human {
   constructor(name) {
      super(name);
   }
}