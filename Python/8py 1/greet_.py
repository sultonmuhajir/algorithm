"""
|--------------------------------------------------------------------------
| Function 1 - hello world
|--------------------------------------------------------------------------
|
"""

def greet():
   return 'hello world!'


greet = lambda: "hello world!"


def greet():
   charList = [104, 101, 108,108,111,32, 119,111,114,108,100,33]
   word = ""
   for char in charList:
      word += chr(char)
   return word


def greet():
   text = 'RED HOWL'
   code = 41775365072
   return ''.join([text.lower()[int(num)] for num in str(code)]) + chr(100 // 3)


print(greet(), "hello world!")