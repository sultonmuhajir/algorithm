"""
|--------------------------------------------------------------------------
| USD => CNY
|--------------------------------------------------------------------------
|
"""

def usdcny(usd):
   return f"{format(usd*6.75, '.2f')} Chinese Yuan"


def usdcny(usd):
   return '%.2f Chinese Yuan' %(usd * 6.75)


def usdcny(usd):
   return f"{(usd * 6.75):.2f} Chinese Yuan"


print(usdcny(15), "101.25 Chinese Yuan")
print(usdcny(465), "3138.75 Chinese Yuan")
print(usdcny(1816), "12258.00 Chinese Yuan")