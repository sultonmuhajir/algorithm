"""
|--------------------------------------------------------------------------
| Leonardo Dicaprio and Oscars
|--------------------------------------------------------------------------
|
"""

def leo(oscar):
   if oscar == 88: return "Leo finally won the oscar! Leo is happy"
   elif oscar == 86: return "Not even for Wolf of wallstreet?!"
   elif oscar < 88: return "When will you give Leo an Oscar?"
   else: return "Leo got one already!"


def leo(oscar):
    return ("Leo got one already!",
            "When will you give Leo an Oscar?",
            "Not even for Wolf of wallstreet?!",
            "Leo finally won the oscar! Leo is happy")[(oscar == 86) + (oscar < 88) + 3 * (oscar == 88)]


def leo(oscar):
   if oscar <= 88:
      return {86: 'Not even for Wolf of wallstreet?!',
               88: 'Leo finally won the oscar! Leo is happy'}.get(
         oscar, 'When will you give Leo an Oscar?')
   return 'Leo got one already!'


def leo(o):
   return [
      "When will you give Leo an Oscar?",
      "Not even for Wolf of wallstreet?!",
      "When will you give Leo an Oscar?",
      "Leo finally won the oscar! Leo is happy",
      "Leo got one already!"
   ][min(max(0,o-85),4)]


print(leo(89),"Leo got one already!")
print(leo(88),"Leo finally won the oscar! Leo is happy")
print(leo(87),"When will you give Leo an Oscar?")
print(leo(86),"Not even for Wolf of wallstreet?!")