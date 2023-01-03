"""
|--------------------------------------------------------------------------
| get character from ASCII Value
|--------------------------------------------------------------------------
|
"""

def get_char(c):
   return chr(c)


def get_char(c):
   return "{:c}".format(c)


def get_char(c):
   return bytes.fromhex(hex(c)[2:]).decode(encoding="latin1")


def get_char(c):
   return '%c' % c


def get_char(c):
   return [chr(i) for i in range(255)][c]


print(get_char(65),'A')