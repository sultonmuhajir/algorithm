"""
|--------------------------------------------------------------------------
| ASCII Total
|--------------------------------------------------------------------------
|
"""

def uni_total(s):
   return sum([ord(i) for i in s])


def uni_total(string):
   res = 0
   for i in string:
      res += ord(i)
   return res


def uni_total(string):
   return sum(map(ord, string))


print(uni_total(""), 0)
print(uni_total("e"), 101)
print(uni_total("aaa"), 291)
print(uni_total("Mary Had A Little Lamb"), 1873)