"""
|--------------------------------------------------------------------------
| Convert a string to an array
|--------------------------------------------------------------------------
|
"""

def string_to_array(s):
   return s.split(' ')


string_to_array = lambda s : s.split(' ')


from re import findall
def string_to_array(s):
   return findall(r'\w+',s) or ['']


print(string_to_array("Robin Singh"), ["Robin", "Singh"])
print(string_to_array("CodeWars"), ["CodeWars"])
print(string_to_array("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"])
print(string_to_array("1 2 3"), ["1", "2", "3"])
print(string_to_array(""), [""])