"""
|--------------------------------------------------------------------------
| Is it a palindrome?
|--------------------------------------------------------------------------
|
"""

def is_palindrome(s):
   return s.lower() == s[::-1].lower()


is_palindrome=lambda s:(lambda _:_==_[::-1])(s.lower())


def is_palindrome(s):
   for i in range(len(s)):
      if s[i].upper() != s[len(s) - 1 -i].upper():
         return False
   return True


print(is_palindrome('a'), True)
print(is_palindrome('aba'), True)
print(is_palindrome('Abba'), True)
print(is_palindrome('malam'), True)
print(is_palindrome('walter'), False)
print(is_palindrome('kodok'), True)
print(is_palindrome('Kasue'), False)