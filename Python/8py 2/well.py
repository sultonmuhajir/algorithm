"""
|--------------------------------------------------------------------------
| Well of Ideas - Easy Version
|--------------------------------------------------------------------------
|
"""

def well(x):
   ideas = len([i for i in x if i == "good"])
   return 'Fail!' if ideas <= 0 else 'I smell a series!' if ideas > 2 else 'Publish!'


def well(x):
   return ('Fail!','Publish!','I smell a series!')[('good' in x) + (x.count('good')>2)]


def well(x):
   ideas = x.count('good')
   return 'I smell a series!' if ideas > 2 else 'Publish!' if ideas else 'Fail!'


print(well(['bad', 'bad', 'bad']), 'Fail!')
print(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
print(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')