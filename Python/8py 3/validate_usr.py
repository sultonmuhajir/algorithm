"""
|--------------------------------------------------------------------------
| Simple validation of a username with regex
|--------------------------------------------------------------------------
|
"""

from re import match
def validate_usr(username):
   return bool(match(r'^[a-z_0-9]{4,16}$', username))


def validate_usr(un):
   return match('^[a-z0-9_]{4,16}$', un) != None


def validate_usr(username):
   return match("^[a-z0-9_]{4,16}$", username) is not None


print(validate_usr('asddsa'), True)
print(validate_usr('a'), False)
print(validate_usr('Hass'), False)
print(validate_usr('Hasd_12assssssasasasasasaasasasasas'), False)
print(validate_usr(''), False)
print(validate_usr('____'), True)
print(validate_usr('012'), False)
print(validate_usr('p1pp1'), True)
print(validate_usr('asd43 34'), False)
print(validate_usr('asd43_34'), True)