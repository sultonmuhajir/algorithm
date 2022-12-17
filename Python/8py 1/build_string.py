"""
|--------------------------------------------------------------------------
| String Templates - Bug Fixing #5
|--------------------------------------------------------------------------
|
"""

def build_string(*args):
   return f"I like {', '.join(args)}!"


def build_string(*args):
   return "I like %s!" % ", ".join(args)


def build_string(*args):
   return "I like {}!".format(", ".join(args))


print(build_string('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!')
print(build_string('Cheese','Milk'), 'I like Cheese, Milk!')
print(build_string('Chocolate'), 'I like Chocolate!')