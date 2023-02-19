"""
|--------------------------------------------------------------------------
| Price of Mangoes
|--------------------------------------------------------------------------
|
"""

def mango(quantity, price):
   return price * (quantity - quantity // 3)


mango = lambda q, p: p * (q - q // 3)


def mango(quantity, price):
   a, b = divmod(quantity, 3)
   return price * (a * 2 + b)


print(mango(2, 3), 6)
print(mango(3, 3), 6)
print(mango(5, 3), 12)
print(mango(9, 5), 30)