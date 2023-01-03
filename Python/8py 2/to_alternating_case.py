"""
|--------------------------------------------------------------------------
| altERnaTIng cAsE <=> ALTerNAtiNG CaSe
|--------------------------------------------------------------------------
|
"""

def to_alternating_case(string):
   return "".join([i.lower() if i.isupper() else i.upper() for i in list(string)])


def to_alternating_case(string):
   return string.swapcase()


def to_alternating_case(string):
   res = ''
   for c in string:
      res += c.upper() if c.islower() else c.lower()
   return res


print(to_alternating_case("hello WORLD"), "HELLO world")
print(to_alternating_case("HeLLo WoRLD"), "hEllO wOrld")
print(to_alternating_case("12345"), "12345")
print(to_alternating_case("1a2b3c4d5e"), "1A2B3C4D5E")