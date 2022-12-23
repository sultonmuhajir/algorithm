"""
|--------------------------------------------------------------------------
| Grasshopper - Debug sayHello
|--------------------------------------------------------------------------
|
"""

def say_hello(name):
   return f'Hello, {name}'


say_hello = "Hello, ".__add__


def say_hello(name):
   return"Hello, " +name


def say_hello(name):
   return "Hello, {}".format(name)


def say_hello(name):
   return "Hello, %s" % name


print(say_hello('Mr. Spock'), 'Hello, Mr. Spock')
print(say_hello('Captain Kirk'), 'Hello, Captain Kirk')
print(say_hello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
print(say_hello('Dr. McCoy'), 'Hello, Dr. McCoy')
print(say_hello('Mr. Scott'), 'Hello, Mr. Scott')