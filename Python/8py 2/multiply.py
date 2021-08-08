"""
|--------------------------------------------------------------------------
| Multiply
|--------------------------------------------------------------------------
|
"""

def multiply(a, b):
	return a * b


multiply = lambda x, y: x * y


def multiply(a, b):
	try:        
		return a * b
	except Exception as e:
		return e


multiply = __import__('operator').mul


print(multiply(2,1), 2)