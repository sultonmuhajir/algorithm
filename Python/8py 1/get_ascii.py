"""
|--------------------------------------------------------------------------
| get ascii value of character
|--------------------------------------------------------------------------
|
"""

def get_ascii(c):
   return ord(c)


get_ascii = ord


def get_ascii(c):
   return bytearray(c.encode('ascii'))[0]


print(get_ascii("A"), 65)
print(get_ascii(" "), 32)
print(get_ascii("!"), 33)