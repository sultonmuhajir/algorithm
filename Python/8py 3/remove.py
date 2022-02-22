"""
|--------------------------------------------------------------------------
| Exclamation marks series #1: Remove an exclamation mark from the end of string
|--------------------------------------------------------------------------
|
"""

def remove(s):
   return s if len(s) == 0 or s[-1] != '!' else s[slice(0, -1)]


def remove(s):
   return s[:-1] if s.endswith('!') else s


from re import sub
def remove(s):
   return sub(r'!$', '', s)


def remove(s):
   return s[:-1] if s and s[-1] == '!' else s


print(remove("Hi!"), "Hi")
print(remove("Hi!!!"), "Hi!!")
print(remove("!Hi"), "!Hi")
print(remove("!Hi!"), "!Hi")
print(remove("Hi! Hi!"), "Hi! Hi")
print(remove("Hi"), "Hi")
print(remove(""), "")