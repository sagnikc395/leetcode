def pattern2(rows):
    for i in range(0,rows):
        for j in range(0,i+1):
            print('*',end='')
        print('\n',end='')


pattern2(5)
