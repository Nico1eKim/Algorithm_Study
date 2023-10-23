def solution(s):
    new_str = s.lower()
    num_p = 0
    num_y = 0
    
    for letter in new_str:
        if letter == "p":
            num_p += 1
        elif letter == "y":
            num_y += 1
            
    if num_p == num_y:
        return True
    return False