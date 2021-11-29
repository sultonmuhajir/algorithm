"""
|--------------------------------------------------------------------------
| Grasshopper - Grade book
|--------------------------------------------------------------------------
|
"""

def get_grade(s1, s2, s3):
   avg = (s1 + s2 + s3) / 3
   return 'A' if avg >= 90 else 'B' if avg < 90 and avg >= 80 else 'C' if  avg < 80 and avg >= 70 else 'D' if avg < 70 and avg >= 60 else 'F'


def get_grade(s1, s2, s3):
   return {6:'D', 7:'C', 8:'B', 9:'A', 10:'A'}.get((s1 + s2 + s3) / 30, 'F')


def get_grade(*s):
   return 'FFFFFFDCBAA'[sum(s)//30]


def get_grade(*args):
   scores = {10: 'A', 9: 'A', 8: 'B', 7: 'C', 6: 'D'}
   mean = sum(args) / len(args)
   return scores.get(mean // 10, 'F')


def get_grade(*arg):
   return list('FDCBAA')[max(int(sum(arg)/30-5), 0)]
    

print(get_grade(92, 93, 94), 'A')
print(get_grade(70, 70, 100), 'B')
print(get_grade(70, 70, 70), 'C')
print(get_grade(65, 70, 59), 'D')
print(get_grade(44, 55, 52), 'F') 