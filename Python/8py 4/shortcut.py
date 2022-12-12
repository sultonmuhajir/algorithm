"""
|--------------------------------------------------------------------------
| Vowel remover
|--------------------------------------------------------------------------
|
"""

def shortcut(s):
   return "".join([i for i in list(s) if i not in "aiueo"])


from re import sub
def shortcut( s ):
   return sub('[aoeui]', '', s)


def shortcut(s):
   return s.translate(None, 'aeiou')


print(shortcut('hello'), 'hll')