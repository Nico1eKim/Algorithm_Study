def solution(score):
    answer = []
    avg = []
    
    # 평균값 구하기
    for i in range(len(score)):
        avg.append((score[i][0] + score[i][1]) / 2)
        
    # 큰수부터 나열
    sort_avg = sorted(avg, reverse=True)
    
    for i in avg:
        answer.append(sort_avg.index(i)+1)
        
    return answer
        