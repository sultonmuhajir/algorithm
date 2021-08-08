"""
|--------------------------------------------------------------------------
| Reversed Words
|--------------------------------------------------------------------------
|
"""

def reverse_words(s):
   return ' '.join(list(reversed(s.split(' '))))


reverseWords = lambda s: " ".join(s.split(" ")[::-1])


def reverseWords(str):
   return " ".join(str.split(" ")[::-1])


def reverseWords(str):
   str = str.split()
   str = reversed(str)
   return " ".join(str)


print(reverse_words("hello world!"), "world! hello")