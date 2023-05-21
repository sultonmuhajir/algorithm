"""
|--------------------------------------------------------------------------
| Returning Strings
|--------------------------------------------------------------------------
|
"""

def greet(name):
   return f'Hello, {name} how are you doing today?'


def greet(name):
   return "Hello, {} how are you doing today?".format(name)


def greet(name):
   return "Hello, %s how are you doing today?" % name


def greet(name):
   return "Hello, " + name + " how are you doing today?"


print(greet('Ryan'), "Hello, Ryan how are you doing today?")
print(greet('Shingles'), "Hello, Shingles how are you doing today?")