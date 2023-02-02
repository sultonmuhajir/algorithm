"""
|--------------------------------------------------------------------------
| Regular Ball Super Ball
|--------------------------------------------------------------------------
|
"""

class Ball:
   def __init__(self, ball_type = "regular"):
      self.ball_type = ball_type


class Ball:
   __init__ = lambda _,a=0: setattr(Ball,'ball_type',('regular','super')[bool(a)])


class Ball(object):
   def __init__(self, type_ = "regular"):
      self.ball_type = type_


print(Ball().ball_type, "regular")
print(Ball('super').ball_type, "super")