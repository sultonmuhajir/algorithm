"""
|--------------------------------------------------------------------------
| Grasshopper - Combine strings
|--------------------------------------------------------------------------
|
"""

def combine_names(fn, ln):
   return f"{fn} {ln}"


def combine_names(*args):
   return ' '.join(args)


def combine_names(fn, ln):
   return fn + " " + ln


print(combine_names("James", "Stevens"), "James Stevens")
print(combine_names("Davy", "Back"), "Davy Back")
print(combine_names("Arthur", "Dent"), "Arthur Dent")