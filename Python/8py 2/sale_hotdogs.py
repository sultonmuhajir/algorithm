"""
|--------------------------------------------------------------------------
| Training JS #7: if..else and ternary operator
|--------------------------------------------------------------------------
|
"""

def sale_hotdogs(n):
   return n * (100 if n < 5 else 95 if n >= 5 and n < 10 else 90)


def sale_hotdogs(n):
   return n * [90, 95, 100][(n<10) + (n<5)]


def sale_hotdogs(n):
   return n * {0: 100, 1: 95}.get(n // 5, 90)


print(sale_hotdogs(0), 0)
print(sale_hotdogs(1), 100)
print(sale_hotdogs(2), 200)
print(sale_hotdogs(3), 300)
print(sale_hotdogs(4), 400)
print(sale_hotdogs(5), 475)
print(sale_hotdogs(9), 855)
print(sale_hotdogs(10), 900)
print(sale_hotdogs(11), 990)
print(sale_hotdogs(100), 9000)