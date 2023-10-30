def solution(food):
    answer = "0"

    for i in range(len(food) - 1, 0, -1):  # 마지막 인덱스부터 1번 인덱스까지
        for number in range(food[i] // 2):  # 한사람이 먹을 음식의 수만큼
            answer = f"{i}{answer}{i}"

    return answer
