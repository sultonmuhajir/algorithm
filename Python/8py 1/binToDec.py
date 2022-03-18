"""
|--------------------------------------------------------------------------
| Bin to Decimal
|--------------------------------------------------------------------------
|
"""

def bin_to_decimal(bin):
   return int(bin, 2)


def bin_to_decimal(s):
   return sum((2 ** i) * int(d) for i, d in enumerate(reversed(s)))


def bin_to_decimal(inp):
   return eval('0b'+str(inp))


print(bin_to_decimal("0"), 0)
print(bin_to_decimal("1"), 1)
print(bin_to_decimal("10"), 2)
print(bin_to_decimal("11"), 3)
print(bin_to_decimal("101010"), 42)
print(bin_to_decimal("1001001"), 73)