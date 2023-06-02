"""
|--------------------------------------------------------------------------
| Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
|--------------------------------------------------------------------------
|
"""

def remove(s, n):
   res = ''
   for i in range(len(s)):
      if s[i] == '!' and n > 0: n -= 1
      else: res += s[i]
   return res


def remove(s, n):
   return s.replace("!", "", n)


def remove(s, n):
   while n > 0:
      s = s.replace('!','',1)
      n -= 1
   return s


def remove(s, n):
   return ''.join(s.split('!', n))


print(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi")
print(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi")
print(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi")
print(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi")