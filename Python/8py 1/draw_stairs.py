"""
|--------------------------------------------------------------------------
| Draw stairs
|--------------------------------------------------------------------------
|
"""

def draw_stairs(n):
   return '\n'.join([' '*i + 'I' for i in range(n)])


draw_stairs = lambda n: '\n'.join(["{}I".format(" "*e) for e in range(n)])


def draw_stairs(n):
   return 'I\n'.join(map(' '.__mul__, range(n))) + 'I'


print(draw_stairs(3))