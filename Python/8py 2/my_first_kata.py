"""
|--------------------------------------------------------------------------
| Fix the Bugs (Syntax) - My First Kata
|--------------------------------------------------------------------------
|
"""

def my_first_kata(a,b):
	return a % b + b % a if type(a) == int and type(b) == int else False


def my_first_kata(a,b):
	return set(map(type, (a,b))) == {int} and a % b + b % a


def my_first_kata(a, b):
	try:
		return a % b + b % a
	except (TypeError, ZeroDivisionError):
		return False


def my_first_kata(a,b):
	return all(type(x)==int for x in (a,b)) and (a%b)+(b%a)


print(my_first_kata(3,5),(3 % 5 + 5 % 3))
print(my_first_kata("hello",3),False)
print(my_first_kata(67,"bye"),False)
print(my_first_kata([],"pippi"),False)