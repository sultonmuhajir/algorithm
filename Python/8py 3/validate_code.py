"""
|--------------------------------------------------------------------------
| validate code with simple regex
|--------------------------------------------------------------------------
|
"""

def validate_code(code):
   return str(code)[0] in '123'


from re import match
def validate_code(code):
   return bool(match('[123]',str(code)))


def validate_code(code):
   return int(str(code)[0]) < 4


print(validate_code(123), True)
print(validate_code(248), True)
print(validate_code(8), False)
print(validate_code(321), True)
print(validate_code(9453), False)