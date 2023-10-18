def solution(s):
    answer = ""
    # 띄어쓰기를 기준으로 단어 나눔
    new_list = s.split(" ")

    for word in new_list:
        for i in range(len(word)):
            if i % 2 == 0:
                answer += word[i].upper()
            else:
                answer += word[i].lower()
        answer += " "
    
    # 맨 뒤에 있는 띄어쓰기 제거
    return answer[0:-1]
