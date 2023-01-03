"""
|--------------------------------------------------------------------------
| Parse float
|--------------------------------------------------------------------------
|
"""

def parse_float(string):
   try: return float(string)
   except: return None


def parse_float(s):
   if type(s) == str and __import__('re').match(r'[\d\.]+', s): return float(s)


def parse_float(string):
   return float(string) if type(string) is str and '.' in string else None


print(parse_float("1"), 1.0)
print(parse_float("a"), None)