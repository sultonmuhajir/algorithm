"""
|--------------------------------------------------------------------------
| Grasshopper - Debug
|--------------------------------------------------------------------------
|
"""

def weather_info (temp):
   temp = (temp - 32) * (5 / 9)
   return f'{temp} is above freezing temperature' if temp > 0 else f'{temp} is freezing temperature'


def weather_info(fahrenheit):
   celsius = 5.0 * (fahrenheit - 32) / 9
   return "{} is {}freezing temperature".format(celsius, "above " if celsius >= 0 else "")


def weather_info(f_temp):
   c_temp = (f_temp - 32) * (5/9)
   return '{} is {}freezing temperature'.format(c_temp, 'above ' if c_temp > 0 else '')
        

print(weather_info(50), '10.0 is above freezing temperature')
print(weather_info(23),  '-5.0 is freezing temperature')