"""
|--------------------------------------------------------------------------
| Be Concise I - The Ternary Operator
|--------------------------------------------------------------------------
|
"""

describe_age=lambda x:"You're a(n) "+("kid" if x<13 else "teenager" if x<18 else "adult" if x<65 else "elderly")


def describe_age(a): 
   return f"You're a(n) {a<13 and 'kid' or a<18 and 'teenager' or a<65 and 'adult' or 'elderly'}"


describe_age=lambda n:"You're a(n) "+"kid teenager adult elderly".split()[(n>12)+(n>17)+(n>64)]


print(describe_age(9), "You're a(n) kid")
print(describe_age(10), "You're a(n) kid")
print(describe_age(11), "You're a(n) kid")
print(describe_age(12), "You're a(n) kid")
print(describe_age(13), "You're a(n) teenager")
print(describe_age(14), "You're a(n) teenager")
print(describe_age(15), "You're a(n) teenager")
print(describe_age(16), "You're a(n) teenager")
print(describe_age(17), "You're a(n) teenager")
print(describe_age(18), "You're a(n) adult")
print(describe_age(19), "You're a(n) adult")
print(describe_age(63), "You're a(n) adult")
print(describe_age(64), "You're a(n) adult")
print(describe_age(65), "You're a(n) elderly")
print(describe_age(66), "You're a(n) elderly")
print(describe_age(100), "You're a(n) elderly")