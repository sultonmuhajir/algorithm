"""
|--------------------------------------------------------------------------
| Grasshopper - Terminal game move function
|--------------------------------------------------------------------------
|
"""

move = lambda _, __: __+_+__


def move(position, roll):
    return position + roll * 2


def move(position, roll):
    return position+(roll<<1)


def move(a, b):
    return move(a + 2, b - 1) if b else a


print(move(0, 4), 8)
print(move(3, 6), 15)
print(move(2, 5), 12)