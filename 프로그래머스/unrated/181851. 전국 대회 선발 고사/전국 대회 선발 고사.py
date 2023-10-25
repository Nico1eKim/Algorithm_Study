def solution(rank, attendance):
    # 번호와 등수를 담는 딕셔너리 생성
    # 등수가 높은대로 정렬
    # 높은 순서의 번호를 계산
    n_d = {}  # new dic
    answer = 0

    for i in range(len(rank)):
        if attendance[i]:
            n_d[rank[i]] = i  # key: 등수, value: 학생 번호

    s_d = sorted(n_d.items())  # sorted dic

    for j in range(0, 3):
        answer += s_d[j][1] * 100 ** (2 - j)

    return answer