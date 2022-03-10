"""
|--------------------------------------------------------------------------
| Reversing Words in a String
|--------------------------------------------------------------------------
|
"""

def reverse(st):
   return ' '.join(reversed(list(filter(lambda i: i != '' ,st.split(' ')))))


def reverse(stg):
   return ' '.join(reversed(stg.split()))


def reverse(st):
   return ' '.join(st.split()[::-1])


def reverse(st):
   res = ''
   for i in st.split():
      res = i + ' ' + res
   return res[:-1]


print(reverse('Hello  World'), 'World Hello')
print(reverse('Hi There.'), 'There. Hi')