def solution(d, budget):
    answer = 0
    
    # 예산 적은 순서로 나열
    d.sort()

    for i in range(len(d)):
        if d[i] <= budget:
            answer += 1 # 지원해줄 수 있는 팀 수
            budget -= d[i]
        else:
            break
            
    return answer