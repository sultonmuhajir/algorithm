"""
|--------------------------------------------------------------------------
| Template Strings
|--------------------------------------------------------------------------
|
"""

def temple_strings(obj, feature): 
   return f"{obj} are {feature}"


temple_strings = '{} are {}'.format


def temple_strings(obj, feature): 
   return obj+" are "+feature


print(temple_strings("Animals","Good"), 'Animals are Good')
print(temple_strings("Animals","Good"), 'Animals are Good')
print(temple_strings("You","Special"), 'You are Special')
print(temple_strings("lives","frozen"), 'lives are frozen')