# skibidus and amogu
#
#
#

def transcibe(amog_inp):
    if('us' in amog_inp):
        amog_inp = amog_inp[:len(amog_inp)-2]+'i'
    elif('i' in amog_inp):
        amog_inp = amog_inp[:len(amog_inp)-1] + 'us'
    return amog_inp

def main():
    t = int(input())
    while t>0:
        s = input() 
        print(transcibe(s))
        t=t-1
        

if __name__ == '__main__':
    main() 
