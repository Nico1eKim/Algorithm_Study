def solution(num_list):
    new_list = []
    even = 0
    for num in num_list:
        if num % 2 == 0:
            even += 1
            
    new_list.append(even)
    
    odd = len(num_list) - even
    new_list.append(odd)
    
    return new_list
        