"""
|--------------------------------------------------------------------------
| Multiply the number
|--------------------------------------------------------------------------
|
"""

def multiply(n):
   return n * 5 ** len(str(abs(n)))


def multiply(n: int) -> int:
   return n * pow(5, len(str(abs(n))))


multiply=lambda n: n*5**len(str(abs(n)))


print(multiply(10),250)
print(multiply(5),25)
print(multiply(200),25000)
print(multiply(0),0)
print(multiply(-2),-10)