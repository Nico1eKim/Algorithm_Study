def solution(s):
    answer = []
    # 각 문자의 마지막 위치를 지정하는 딕셔너리
    last_position = {}

    for i in range(len(s)):
        if s[i] in last_position:
            answer.append(i - last_position[s[i]])
        else:
            answer.append(-1)
        
        last_position[s[i]] = i
        
    return answer
