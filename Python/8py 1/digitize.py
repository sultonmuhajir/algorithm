"""
|--------------------------------------------------------------------------
| Convert number to reversed array of digits
|--------------------------------------------------------------------------
|
"""

def digitize(n):
	s = str(n)
	res = []
	for i in range(len(s)):
		res.append(int(s[i]))
	return res[::-1]
	

def digitize(n):
	return map(int, str(n)[::-1])
	

def digitize(n):
	return [int(x) for x in str(n)[::-1]]
	

def digitize(n):
	return list(reversed([int(s) for s in str(n)]))
	

def digitize(n):
	return [n%10] + digitize(n/10) if n else []
	

print(digitize(35231),[1,3,2,5,3])
print(digitize(23582357),[7,5,3,2,8,5,3,2])
print(digitize(984764738),[8,3,7,4,6,7,4,8,9])
print(digitize(45762893920),[0,2,9,3,9,8,2,6,7,5,4])
print(digitize(548702838394),[4,9,3,8,3,8,2,0,7,8,4,5])