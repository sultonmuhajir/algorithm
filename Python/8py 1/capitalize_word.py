"""
|--------------------------------------------------------------------------
| Capitalization and Mutability
|--------------------------------------------------------------------------
|
"""

def capitalize_word(word):
   return word.capitalize()


def capitalizeWord(word):
   return word[:1].upper() + word[1:]


def capitalizeWord(s):
   return s.title()


print(capitalize_word('word'), 'Word')
print(capitalize_word('i'), 'I')
print(capitalize_word('glasswear'), 'Glasswear')