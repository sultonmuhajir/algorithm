"""
|--------------------------------------------------------------------------
| Regex count lowercase letters
|--------------------------------------------------------------------------
|
"""

from re import findall, sub
def lowercase_count(strng):
   return len(findall(r"[a-z]", strng))


def lowercase_count(strng):
   return sum(a.islower() for a in strng)


def lowercase_count(st):
   return len(sub(r'[^a-z]*','',st))


def lowercase_count(str):
   return sum(1 for c in str if c.islower())


print(lowercase_count("abc"), 3)
print(lowercase_count("abcABC123"), 3)
print(lowercase_count("abcABC123!@#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3)
print(lowercase_count(""), 0)
print(lowercase_count("ABC123!@#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
print(lowercase_count("abcdefghijklmnopqrstuvwxyz"), 26)