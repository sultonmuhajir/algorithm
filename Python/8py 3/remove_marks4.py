"""
|--------------------------------------------------------------------------
| Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
|--------------------------------------------------------------------------
|
"""

def remove(s):
   return s.replace("!", "") + "!"


def remove(s):
   return '{}!'.format(s.replace('!', ''))


def remove(s):
   return f'{s.replace("!", "")}!'


print(remove("Hi!"), "Hi!")
print(remove("Hi!!!"), "Hi!")
print(remove("!Hi"), "Hi!")
print(remove("!Hi!"), "Hi!")
print(remove("Hi! Hi!"), "Hi Hi!")
print(remove("Hi"), "Hi!")