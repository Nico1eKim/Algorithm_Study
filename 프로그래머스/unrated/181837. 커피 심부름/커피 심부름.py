def solution(order):
    # 아메리카노 4500
    # 라테 5000
    # 메뉴만: 차가운, 아무거나: 차가운 아메리카노
    price = 0
    
    for menu in order:
        if 'cafelatte' in menu:
            price += 5000
        else:
            price += 4500
    
    return price
            