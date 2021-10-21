"""
|--------------------------------------------------------------------------
| Remove exclamation marks
|--------------------------------------------------------------------------
|
"""

def remove_exclamation_marks(s):
   return s.replace('!', '')


def remove_exclamation_marks(s):
   new_s = ''
   for i in s:
      if i != '!':
         new_s += i
   return new_s


def remove_exclamation_marks(s):
   return ''.join([x for x in s if x != '!'])


import re
def remove_exclamation_marks(s):
   return re.sub(r'!', '', s)


print(remove_exclamation_marks("Hello World!"), "Hello World")
print(remove_exclamation_marks("Hello World!!!"), "Hello World")
print(remove_exclamation_marks("Hi! Hello!"), "Hi Hello")
print(remove_exclamation_marks(""), "")
print(remove_exclamation_marks("Oh, no!!!"), "Oh, no")