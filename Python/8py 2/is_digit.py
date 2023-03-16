"""
|--------------------------------------------------------------------------
| Regexp Basics - is it a digit?
|--------------------------------------------------------------------------
|
"""

def is_digit(n):
   return n != '' and n in list('0123456789')


def is_digit(n):
   return n.isdigit() and len(n)==1


from re import match
def is_digit(n):
   return bool(match("\d\Z", n))


print(is_digit(""), False)
print(is_digit("7"), True)
print(is_digit(" "), False)
print(is_digit("a"), False)
print(is_digit("a5"), False)
print(is_digit("14"), False)
print(is_digit("12"), False)
print(is_digit("12"), False)