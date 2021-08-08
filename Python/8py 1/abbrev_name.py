"""
|--------------------------------------------------------------------------
| Abbreviate a Two Word Name
|--------------------------------------------------------------------------
|
"""

def abbrev_name(name):
	n = name.split(" ")
	res = []
	for i in range(len(n)):
		res.append(n[i][0])
	return (".".join(res).upper())


def abbrevName(name):
	return '.'.join(w[0] for w in name.split()).upper()


def abbrevName(name):
	new = name.title()
	a = new.split()
	b = a[0]
	c = a[1]
	res = b[0]+"."+c[0]
	return res


def abbrevName(name):
	return name.split(' ')[0][0].upper()+'.'+name.split(' ')[1][0].upper()



def abbrevName(name):
	return '.'.join(filter(str.isupper,name.title()))


print(abbrev_name("Sam Harris"), "S.H")
print(abbrev_name("Patrick Feenan"), "P.F")
print(abbrev_name("Evan Cole"), "E.C")
print(abbrev_name("P Favuzzi"), "P.F")
print(abbrev_name("David Mendieta"), "D.M")