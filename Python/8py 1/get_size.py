"""
|--------------------------------------------------------------------------
| Surface Area and Volume of a Box
|--------------------------------------------------------------------------
|
"""

def get_size(w,h,d):
   return [2 * (w * h + w * d + h * d), w * h * d]


def get_size(w,h,d):
   return [2*d*w + 2*h*w + 2*d*h, w*h*d]


def get_size(w,h,d):
   area = 2 * (w * h + w * d + h * d)
   volume = w * h * d
   return [area, volume]


print(get_size(4, 2, 6), [88,48])
print(get_size(1, 1, 1), [6,1])
print(get_size(1, 2, 1), [10,2])