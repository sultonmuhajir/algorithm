"""
|--------------------------------------------------------------------------
| Unexpected parsing
|--------------------------------------------------------------------------
|
"""

def get_status(is_busy):
   return {"status": "busy" if is_busy else "available"}


get_status = lambda b:{'status':['available','busy'][b]}


def get_status(is_busy):
   status = "busy" if is_busy else "available"
   return {"status" : status}


print(get_status(True)["status"], "busy")
print(get_status(False)["status"], "available")