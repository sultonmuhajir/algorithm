"""
|--------------------------------------------------------------------------
| Grasshopper - Function syntax debugging
|--------------------------------------------------------------------------
|
"""

def main(verb, noun):
   return verb + noun


main = str.__add__


def main(*a):
   return ''.join(a)


def main(verb, noun):
   return f'{verb}{noun}'


print(main('take ', 'item'), 'take item')
print(main('use ', 'sword'), 'use sword')