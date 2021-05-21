import os 


files = os.listdir("code-mirror/languages/")

template = '<link rel="stylesheet" href="/{}">'

outp = []
for _ in files:
    if os.path.isfile("code-mirror/languages/" + _):
        outp.append("[" +_[:-3] + "]")
print(" ".join(outp))