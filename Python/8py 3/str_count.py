"""
|--------------------------------------------------------------------------
| All Star Code Challenge #18
|--------------------------------------------------------------------------
|
"""

def str_count(strng, letter):
   return len(list(filter(lambda i: i == letter , strng)))


str_count = str.count


def strCount(string, letter):
   return string.count(letter)


def str_count(strng, letter):
   return len(strng.split(letter)) - 1


def str_count(strng, letter):
   return sum([ch == letter for ch in strng])


print(str_count('hello', 'l'), 2)
print(str_count('hello', 'e'), 1)
print(str_count('codewars', 'c'), 1)
print(str_count('ggggg', 'g'), 5)
print(str_count('hello world', 'o'), 2)