"""
|--------------------------------------------------------------------------
| Hello, Name or World!
|--------------------------------------------------------------------------
|
"""

def hello(name=None):
   if name is None or name == '':
      return 'Hello, World!'
   else:
      return f'Hello, {name.capitalize()}!'


hello = lambda name="": "Hello, {}!".format("World" if not name else name.capitalize())


def hello(name=''):
   return f"Hello, {name.title() or 'World'}!"


def hello( name = ''):
   return 'Hello, World!' if len(name) == 0 else 'Hello, ' + name[0].upper() + name[1:].lower() + '!'


def hello(name=''):
   return "Hello, {}!".format(name.title() if name else 'World')


print(hello('johN'), 'Hello, John!')
print(hello('alice'), 'Hello, Alice!')
print(hello(), 'Hello, World!')
print(hello(''), 'Hello, World!')