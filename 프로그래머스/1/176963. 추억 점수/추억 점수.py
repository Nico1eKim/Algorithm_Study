def solution(name, yearning, photo):
    answer = []

    for i in photo:
        score=0
        for j in range(len(name)):
            if name[j] in i:
                score+=yearning[j]
        answer.append(score)
    return answer
