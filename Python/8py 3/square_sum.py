"""
|--------------------------------------------------------------------------
| Square(n) Sum
|--------------------------------------------------------------------------
|
"""

def square_sum(numbers):  
   return sum(map(lambda i: i**2, numbers))


def square_sum(numbers):
   res = 0
   for num in numbers:
      res = res + num*num
   return res


def square_sum(numbers):
   return sum(x ** 2 for x in numbers)


def square_sum(numbers):
   result = []
   for sqr in numbers:
      result.append(sqr ** 2)
   return sum(result)


print(square_sum([1,2]), 5)
print(square_sum([0, 3, 4, 5]), 50)
print(square_sum([]), 0)
print(square_sum([-1,-2]), 5)
print(square_sum([-1,0,1]), 2)