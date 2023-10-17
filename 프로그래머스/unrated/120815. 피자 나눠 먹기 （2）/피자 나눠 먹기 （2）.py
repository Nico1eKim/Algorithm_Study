def solution(n):
    pizzaBox = 1
    while (pizzaBox * 6) % n != 0:
        pizzaBox += 1
    return pizzaBox