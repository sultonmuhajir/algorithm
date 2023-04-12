"""
|--------------------------------------------------------------------------
| Classy Classes
|--------------------------------------------------------------------------
|
"""

class Person:
   def __init__(self, name, age):
      self.info = f"{name}s age is {age}"


class Person(): __init__ = lambda s,n,a: setattr(s,"info",'{}s age is {}'.format(n,a))


class Person:
   def __init__(self, name, age):
      self.name = name
      self.age = age
   @property
   def info(self):
      return '{}s age is {}'.format(self.name, self.age)


john = Person("john", 34)
print(john.info, "johns age is 34")