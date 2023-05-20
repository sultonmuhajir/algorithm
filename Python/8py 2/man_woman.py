"""
|--------------------------------------------------------------------------
| Basic subclasses - Adam and Eve
|--------------------------------------------------------------------------
|
"""

def God():
   return [Man(), Woman()]
class Human: pass
class Man(Human): pass 
class Woman(Human): pass


God, Human = lambda: [Man(), Woman()], type('', (), {})
Man = Woman = type('', (Human,), {})


Human = type('Human', (), {})
Man = type('Man', (Human,), {})
Woman = type('Woman', (Human,), {})
def God():
   return [Man(), Woman()]