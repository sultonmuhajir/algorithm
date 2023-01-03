"""
|--------------------------------------------------------------------------
| Convert a Number to a String!
|--------------------------------------------------------------------------
|
"""

def number_to_string(num):
   return str(num)

   
number_to_string = lambda n: str(n)


def number_to_string(num):
   return "{}".format(num)

   
def number_to_string(num):
   return "%s" % num

   
def number_to_string(num):
   return ascii(num)

   
def number_to_string(num):
   return f"{num}"

   
def number_to_string(num):
   return num.__str__()

   
print(number_to_string(67), '67')
print(number_to_string(79585), '79585')
print(number_to_string(79585), "79585")
print(number_to_string(1+2), '3')
print(number_to_string(1-2), '-1')