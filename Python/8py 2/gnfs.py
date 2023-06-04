"""
|--------------------------------------------------------------------------
| Get number from string
|--------------------------------------------------------------------------
|
"""

def get_number_from_string(string):
   return int(''.join([i for i in string if i.isdigit()]))


def get_number_from_string(s):
   return int(filter(str.isdigit, s))


from re import sub, findall
def get_number_from_string(s):
   return int(sub(r'\D', '', s))


def get_number_from_string(string):
   return int(''.join(findall(r'\d', string)))


print(get_number_from_string("1"), 1)
print(get_number_from_string("123"), 123)
print(get_number_from_string("this is number: 7"), 7)