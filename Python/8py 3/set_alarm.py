"""
|--------------------------------------------------------------------------
| L1: Set Alarm
|--------------------------------------------------------------------------
|
"""

def set_alarm(employed, vacation):
   return employed > vacation


set_alarm=int.__gt__
set_alarm=lambda *a:a==(1,0)


def set_alarm(employed, vacation):
   return employed and not vacation


import random
def set_alarm(employed, vacation):
   return random.choice((True,False))


print(set_alarm(True, True), False)
print(set_alarm(False, True), False)
print(set_alarm(False, False), False)
print(set_alarm(True, False), True)