def pattern5(rows):
    for i in range(0,rows):
        for j in range(rows-i,0,-1):
            print('*',end='')
        print('\n',end='')

pattern5(5)
