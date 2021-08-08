"""
|--------------------------------------------------------------------------
| Basic variable assignment
|--------------------------------------------------------------------------
|
"""

a = "code"
b = "wa.rs"
name = a + b


name = "codewa.rs"


a = "code"
b = "wa.rs"
name = "{}{}".format(a,b)


a = "code"
b = "wa.rs"
name = a[0]+a[1]+a[2]+a[-1] + b[0]+b[1]+b[2]+b[-2:]


a = "code"
b = "wa.rs"
list = [a,b]
name = ''.join(list)


print(name, "codewa.rs")