"""
|--------------------------------------------------------------------------
| Training JS #18: Methods of String object--concat() split() and its good friend join()
|--------------------------------------------------------------------------
|
"""

def split_and_merge(st, sp):
   return ' '.join([sp.join(list(i)) for i in st.split(' ')])


def split_and_merge(string, sp):
   return ' '.join(map(sp.join, string.split()))


def split_and_merge(string, sp):
   return sp.join(list(string)).replace(f'{sp} {sp}', ' ')


print(split_and_merge("My name is John"," ") , "M y n a m e i s J o h n")
print(split_and_merge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n")
print(split_and_merge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!")
print(split_and_merge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!")