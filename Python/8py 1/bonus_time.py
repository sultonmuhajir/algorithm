"""
|--------------------------------------------------------------------------
| Do I get a bonus?
|--------------------------------------------------------------------------
|
"""

def bonus_time(salary, bonus):
   return f'${salary*10}' if bonus else f'${salary}'


bonus_time = lambda s,b: "${}".format(s*(10*b or 1))


def bonus_time(salary, bonus):
   return "${}".format(salary * (10 if bonus else 1))


def bonus_time(salary, bonus):
   if bonus: salary = salary * 10
   return str.format('${0}', salary)


def bonus_time(salary, bonus):
   return '$' + str(salary * [1,10][bonus])


print(bonus_time(10000, False), '$10000')
print(bonus_time(60000, False), '$60000')
print(bonus_time(2, True), '$20')
print(bonus_time(78, False), '$78')