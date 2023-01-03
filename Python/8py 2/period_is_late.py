"""
|--------------------------------------------------------------------------
| Is your period late?
|--------------------------------------------------------------------------
|
"""

def period_is_late(last, today, cycle_length):
   return (today - last).days > cycle_length


def period_is_late(last, today, cycle_length):
   return today.toordinal() - last.toordinal() > cycle_length


from datetime import timedelta
def period_is_late(last,today,cycle_length):
   return today > (last + timedelta(days=cycle_length))