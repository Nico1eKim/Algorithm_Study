def solution(numbers):
    sum = 0
    avg = 0
    for num in numbers:
        sum += num
    
    avg = sum / len(numbers)
    return avg