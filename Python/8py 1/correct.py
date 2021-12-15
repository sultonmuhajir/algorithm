"""
|--------------------------------------------------------------------------
| Correct the mistakes of the character recognition software
|--------------------------------------------------------------------------
|
"""

def correct(s):
   return s.replace('5', 'S').replace('0', 'O').replace('1', 'I')


def correct(string):
   for e, c in {'5':'S','0':'O','1':'I'}.items():
      string = string.replace(e,c)
   return string


def correct(string):
   return string.translate(str.maketrans("501", "SOI"))


def correct(string):
   return ''.join({'0':'O', '5':'S', '1':'I'}.get(c, c) for c in string)


print(correct("L0ND0N"), "LONDON")
print(correct("DUBL1N"), "DUBLIN")
print(correct("51NGAP0RE"), "SINGAPORE")
print(correct("BUDAPE5T"), "BUDAPEST")
print(correct("PAR15"), "PARIS")