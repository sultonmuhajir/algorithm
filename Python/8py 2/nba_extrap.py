"""
|--------------------------------------------------------------------------
| NBA full 48 minutes average
|--------------------------------------------------------------------------
|
"""

def nba_extrap(ppg, mpg):
   return 0 if ppg+mpg==0 else round(((ppg * 48) / mpg) * 10) / 10 or 0


def nba_extrap(ppg, mpg):
   try: return round(float(ppg) / mpg * 48, 1)
   except: return 0


def nba_extrap(ppg, mpg):
   return round(ppg * 48.0 / mpg, 1) if mpg else 0


print(nba_extrap(12, 20), 28.8)
print(nba_extrap(10, 10), 48.0)
print(nba_extrap(5, 17), 14.1)
print(nba_extrap(0, 0), 0)
print(nba_extrap(30.8, 34.7), 42.6)
print(nba_extrap(22.9, 33.8), 32.5)