"""
|--------------------------------------------------------------------------
| Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
|--------------------------------------------------------------------------
|
"""

from re import match, sub
def replace_exclamation(s):
   res = ''
   for i in s:
      res += '!' if match("[aeiouAIUEO]", i) else i
   return res


def replace_exclamation(s):
   return sub('[aeiouAEIOU]', '!', s)


def replace_exclamation(s):
   return ''.join('!' if c in 'aeiouAEIOU' else c for c in s)


def replace_exclamation(s):
   return s.translate(str.maketrans('aeiouAEIOU', '!' * 10))


def replace_exclamation(s):
   for i in "aeuioAEUIO":  
      s = s.replace(i, "!")
   return s


print(replace_exclamation("Hi!") , "H!!")
print(replace_exclamation("!Hi! Hi!") , "!H!! H!!")
print(replace_exclamation("aeiou") , "!!!!!")
print(replace_exclamation("ABCDE") , "!BCD!")