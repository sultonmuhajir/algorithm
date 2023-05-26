"""
|--------------------------------------------------------------------------
| Exclamation marks series #2: Remove all exclamation marks from the end of sentence
|--------------------------------------------------------------------------
|
"""

def remove(s):
   x, string = 0, list(reversed(s))
   for i in string:
      if i != "!": break
      x += 1
   return s[0:len(s)-x]


def remove(s):
   return s.rstrip("!")


def remove(s):
   while s and s[-1] == "!":
      s = s[:-1]
   return s


from re import sub
def remove(s):
   return sub('[!]+$', '', s)


print(remove("Hi!"), "Hi")
print(remove("Hi!!!"), "Hi")
print(remove("!Hi"), "!Hi")
print(remove("!Hi!"), "!Hi")
print(remove("Hi! Hi!"), "Hi! Hi")
print(remove("Hi"), "Hi")