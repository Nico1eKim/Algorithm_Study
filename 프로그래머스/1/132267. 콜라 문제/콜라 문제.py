# a: 콜라를 받기 위해 마트에 주어야 하는 병 수
# b: 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수
# n: 빈 병의 개수

def solution(a, b, n):
    answer = 0

    while n >= a:
        left = n % a  # 남은 콜라의 수
        n = (n // a) * b  # 마트에서 받은 콜라의 수
        answer += n
        n += left  # 아직 안마신 콜라는 다음에 마트에 가져갈 때 포함시켜야함

    return answer