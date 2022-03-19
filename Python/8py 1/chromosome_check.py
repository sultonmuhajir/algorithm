"""
|--------------------------------------------------------------------------
| Determine offspring sex based on genes XX and XY chromosomes
|--------------------------------------------------------------------------
|
"""

def chromosome_check(sperm):
   return 'Congratulations! You\'re going to have a ' + ('son' if sperm == 'XY' else 'daughter') + '.'


def chromosome_check(sperm):
   return 'Congratulations! You\'re going to have a {}.'.format('son' if 'Y' in sperm else 'daughter')


def chromosome_check(sperm):
   return "Congratulations! You're going to have a %s." % ('son', 'daughter')[sperm[1] == 'X']


def chromosome_check(sperm):
   return "Congratulations! You're going to have a {}.".format({"XY": "son", "XX": "daughter"}.get(sperm)) 


print(chromosome_check('XY'), 'Congratulations! You\'re going to have a son.')
print(chromosome_check('XX'), 'Congratulations! You\'re going to have a daughter.')