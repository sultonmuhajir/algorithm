"""
|--------------------------------------------------------------------------
| Reversed Strings
|--------------------------------------------------------------------------
|
"""

def solution(string):
   return string[::-1]

   
solution = lambda s: s[::-1]


def solution(string):
   temp = list(string)
   temp.reverse()
   return ''.join(temp)

   
def solution(string):
   return ''.join(i for i in reversed(string))

   
print(solution('world'), 'dlrow')
print(solution('hello'), 'olleh')
print(solution(''), '')
print(solution('h'), 'h')