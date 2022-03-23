"""
|--------------------------------------------------------------------------
| Sentence Smash
|--------------------------------------------------------------------------
|
"""

def smash(words):
   return ' '.join(words)


smash = lambda x:' '.join(x)


import re
def smash(words):
   return re.sub("[]'',[]", "", str(words))


def smash(words):
   str = ""
   for w in words:
      str += w + " "
   return str[:-1]
    

print(smash(["hello"]), "hello")
print(smash(["hello", "world"]), "hello world")