def solution(n):
    new_str = str(n)
    sum = 0
    for i in range(len(new_str)):
        sum += int(new_str[i])
    return sum