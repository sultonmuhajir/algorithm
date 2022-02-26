"""
|--------------------------------------------------------------------------
| Triple Trouble
|--------------------------------------------------------------------------
|
"""

def triple_trouble(one, two, three):
   res = ''
   for i in range(len(one)):
      res += f'{one[i]}{two[i]}{three[i]}'
   return res


def triple_trouble(*args):
    return ''.join(sum(zip(*args), ()))


def triple_trouble(one, two, three):
   return ''.join([one[i] + two[i] + three[i] for i in range(len(one))])


def triple_trouble(*args):
   return "".join(map("".join, zip(*args)))


print(triple_trouble("aaa","bbb","ccc"), "abcabcabc")
print(triple_trouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc")
print(triple_trouble("burn", "reds", "roll"), "brrueordlnsl")
print(triple_trouble("Bm", "aa", "tn"), "Batman")
print(triple_trouble("LLh", "euo", "xtr"), "LexLuthor")