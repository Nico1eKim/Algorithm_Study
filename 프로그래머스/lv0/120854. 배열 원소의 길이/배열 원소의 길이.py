def solution(strlist):
    new_list = []
    count = 0
    
    for str in strlist:
        count = len(str)
        new_list.append(count)
        
    return new_list