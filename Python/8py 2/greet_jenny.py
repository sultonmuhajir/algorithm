"""
|--------------------------------------------------------------------------
| Jenny's secret message
|--------------------------------------------------------------------------
|
"""

def greet(name):
   return 'Hello, my love!' if name == 'Johnny' else f'Hello, {name}!'


greet = lambda n: "Hello, {}!".format(n.replace("Johnny","my love"))


def greet(name):
   if name != 'Johnny':
      return "Hello, {name}!".format(name=name)
   else:
      return "Hello, my love!"


def greet(name):
   return "Hello, {name}!".format(name = ('my love' if name == 'Johnny' else name))


def greet(name):
   return "Hello, {name}!".format(name=name.replace("Johnny", "my love"))    
 

print(greet("James"), "Hello, James!")
print(greet("Jane"), "Hello, Jane!")
print(greet("Jim"), "Hello, Jim!")
print(greet("Johnny"), "Hello, my love!")