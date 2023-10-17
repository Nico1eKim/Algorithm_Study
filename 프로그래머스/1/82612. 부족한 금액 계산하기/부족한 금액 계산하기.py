def solution(price, money, count):
    total_price = 0
    
    for n in range(1, count + 1):
        total_price += price * n
    
    if total_price >= money:
        return total_price - money
    return 0