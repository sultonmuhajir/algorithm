"""
|--------------------------------------------------------------------------
| Convert a Boolean to a String
|--------------------------------------------------------------------------
|
"""

def boolean_to_string(b):
   return 'True' if b==True else 'False'


def boolean_to_string(b):
   return str(b)


def boolean_to_string(b):
   return ('False', 'True')[b]


def boolean_to_string(b):
   return f"{b}"


print(boolean_to_string(True), "True")
print(boolean_to_string(False), "False")