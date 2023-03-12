"""
|--------------------------------------------------------------------------
| Contamination #1 -String-
|--------------------------------------------------------------------------
|
"""

def contamination(text, char):
   return char * len(text)


def contamination(text, char):
   return "".join(char for x in text)


from re import sub
def contamination(text, char):
   return sub(".", char, text)


print(contamination("abc","z"), "zzz")
print(contamination("","z"), "")
print(contamination("abc",""), "")
print(contamination("_3ebzgh4","&"), "&&&&&&&&")
print(contamination("//case"," "), "      ")