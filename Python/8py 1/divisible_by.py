"""
|--------------------------------------------------------------------------
| Find numbers which are divisible by given number
|--------------------------------------------------------------------------
|
"""

def divisible_by(numbers, divisor):
   return list(filter(lambda i: i % divisor == 0 , numbers))


def divisible_by(numbers, divisor):
   return [x for x in numbers if x%divisor == 0]


def divisible_by(numbers, divisor):
   res = []
   for num in numbers:
      if num % divisor == 0:
         res.append(num)
   return res


def divisible_by(numbers, divisor):
   return [nb for nb in numbers if not nb % divisor]


print(divisible_by([1,2,3,4,5,6], 2), [2,4,6])
print(divisible_by([1,2,3,4,5,6], 3), [3,6])
print(divisible_by([0,1,2,3,4,5,6], 4), [0,4])