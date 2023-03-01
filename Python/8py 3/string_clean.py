"""
|--------------------------------------------------------------------------
| String cleaning
|--------------------------------------------------------------------------
|
"""

def string_clean(s):
   return ''.join([i for i in s if i not in "0123456789"])


def string_clean(s):
   for d in '0123456789':
      s = s.replace(d, '')
   return s


def string_clean(s):
   return ''.join(x for x in s if not x.isdigit())


def string_clean(s):
   return s.translate(s.maketrans(' ', ' ', '1234567890'))


print(string_clean("! !"), "! !")
print(string_clean("123456789"), "")
print(string_clean("(E3at m2e2!!)"), "(Eat me!!)")