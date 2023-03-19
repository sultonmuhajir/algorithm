"""
|--------------------------------------------------------------------------
| The 'if' function
|--------------------------------------------------------------------------
|
"""

def _if(bool, func1, func2):
   return func1() if bool else func2()


def _if(bool, func1, func2):
	return [func2, func1][bool]()


def _if(bool, func1, func2):
	return (bool and func1 or func2)()


def truthy(): 
	print("True")
def falsey(): 
	print("False")
print(_if(True, truthy, falsey))