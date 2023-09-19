def solution(n, k):
    total = 0
    
    k -= n // 10
    
    total = n * 12000 + k * 2000

    return total