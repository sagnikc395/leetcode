def min_possible_length(s):
    q = list(s)

    while(len(q)) >1:
        found = False
        for i in range(len(q)-1):
            if q[i] == q[i+1]:
                q[i] = 'a'
                q.pop(1)
                #found = True
                #break

        #if not found:
        #    break

    return len(s)

    
def main():
    t = int(input())
    while t>0:
        s = input()
        print(min_possible_length(s))
        t=t-1

if __name__ == '__main__':
    main()
