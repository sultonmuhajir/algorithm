"""
|--------------------------------------------------------------------------
| Who ate the cookie?
|--------------------------------------------------------------------------
|
"""

def cookie(x):
   name = "Zach" if type(x) == str else "Monica" if type(x) == int or type(x) == float else "the dog"
   return f"Who ate the last cookie? It was {name}!"


def cookie(x):
   return "Who ate the last cookie? It was %s!" % {str:"Zach", float:"Monica", int:"Monica"}.get(type(x), "the dog")


def cookie(x):
   return 'Who ate the last cookie? It was %s!' % ('the dog', 'Monica', 'Zach')[
      (type(x) in (int, float)) + 2 * (type(x) == str)]


print(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
print(cookie(2.3), "Who ate the last cookie? It was Monica!")
print(cookie(26), "Who ate the last cookie? It was Monica!")
print(cookie(True), "Who ate the last cookie? It was the dog!")