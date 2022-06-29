"""
|--------------------------------------------------------------------------
| Thinkful - Logic Drills: Traffic light
|--------------------------------------------------------------------------
|
"""

def update_light(current):
   return 'yellow' if current == 'green' else 'red' if current == 'yellow' else 'green'


update_light = {"green":"yellow", "yellow":"red", "red":"green"}.get


def update_light(current):
   color = ['green', 'yellow', 'red']
   return color[(color.index(current)+1)%len(color)]


update_light = lambda c,l=["yellow","green","red"]: l[l.index(c)-1]


def update_light(current):
   return {"green": "yellow", "yellow": "red", "red": "green"}[current]


print(update_light('green'), 'yellow')
print(update_light('yellow'), 'red')
print(update_light('red'), 'green')