"""
|--------------------------------------------------------------------------
| Student's Final Grade
|--------------------------------------------------------------------------
|
"""

def final_grade(exam, projects):
   if exam > 90 or projects > 10:
      return 100
   elif exam > 75 and projects >= 5:
      return 90
   elif exam > 50 and projects >= 2:
      return 75
   else:
      return 0


final_grade=lambda e,p:{e>50 and p>=2:75,e>75 and p>=5:90,e>90 or p>10:100}.get(True,0)


def final_grade(exam, projects):
   return 100 if exam > 90 or projects > 10 else 90 if exam > 75 and projects >= 5 else 75 if exam > 50 and projects >=2 else 0


def final_grade(x, p):
   return ((x>90 or p>10) and 100 or 
            x>75 and p>=5 and 90 or
            x>50 and p>=2 and 75 or 0)


print(final_grade(100, 12), 100)
print(final_grade(85, 5), 90)