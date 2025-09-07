def pattern6(rows):
    for i in range(0,rows):
        for j in range(1,rows-i+1):
            print(j,end='')
        print('\n',end='')

pattern6(5)
