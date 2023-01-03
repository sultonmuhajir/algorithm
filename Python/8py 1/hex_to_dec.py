"""
|--------------------------------------------------------------------------
| Hex to Decimal
|--------------------------------------------------------------------------
|
"""

def hex_to_dec(s):
   return int(s, base=16)


def hex_to_dec(s):
   key = "0123456789abcdef"
   n, res = 0, 0
   for l in s[::-1]:
      res += key.index(l)*(16.**n)
      n += 1
   return int(res)


def hex_to_dec(s):
   return int(eval('0x'+s))


print(hex_to_dec("1"), 1)
print(hex_to_dec("a"), 10)
print(hex_to_dec("10"), 16)