"""
|--------------------------------------------------------------------------
| MakeUpperCase
|--------------------------------------------------------------------------
|
"""

def make_upper_case(s):
   return s.upper()


make_upper_case = str.upper


def make_upper_case(s):
   return "".join(i.capitalize() for i in s)


print(make_upper_case("hello"), "HELLO")