"""
|--------------------------------------------------------------------------
| Switch/Case - Bug Fixing #6
|--------------------------------------------------------------------------
|
"""

def eval_object(v):
   match v["operation"]:
      case "+": return v["a"] + v["b"]
      case "-": return v["a"] - v["b"]
      case "/": return v["a"] / v["b"]
      case "*": return v["a"] * v["b"]
      case "%": return v["a"] % v["b"]
      case "**": return v["a"] ** v["b"]
      case _: return 1


def eval_object(v):
   return eval("{a}{operation}{b}".format(**v))


def eval_object(v):
   return {"+": v['a']+v['b'],
         "-": v['a']-v['b'],
         "/": v['a']/v['b'],
         "*": v['a']*v['b'],
         "%": v['a']%v['b'],
         "**": v['a']**v['b'], }.get(v['operation'])
      

print(eval_object({'a':1,'b':1,'operation':'+'}), 2)
print(eval_object({'a':1,'b':1,'operation':'-'}), 0)
print(eval_object({'a':1,'b':1,'operation':'/'}), 1)
print(eval_object({'a':1,'b':1,'operation':'*'}), 1)
print(eval_object({'a':1,'b':1,'operation':'%'}), 0)
print(eval_object({'a':1,'b':1,'operation':'**'}), 1)