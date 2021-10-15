"""
|--------------------------------------------------------------------------
| Short Long Short
|--------------------------------------------------------------------------
|
"""

def solution(a, b):
	return a+b+a if len(a) < len(b) else b+a+b


def solution(a, b):
	if len(str(a)) < len(str(b)):
		return '{}{}{}'.format(a,b,a)
	else:
		return '{}{}{}'.format(b,a,b)


def solution(a, b):
	return '{0}{1}{0}'.format(*sorted((a, b), key=len))


def solution(a: str, b: str) -> str:
	short, long = sorted((a, b), key=len)
	return f"{short}{long}{short}"


def solution(a, b):
	a,b = sorted([a,b], key=len)
	return a + b + a


print(solution('45', '1'), '1451')
print(solution('13', '200'), '1320013')
print(solution('Soon', 'Me'), 'MeSoonMe')
print(solution('U', 'False'), 'UFalseU')