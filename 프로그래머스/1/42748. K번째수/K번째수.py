# commands의 각 배열에는 i, j, k가 있음
# commands의 길이만큼 반복
# array를 i와 j만큼 자르기
# 자른 array를 sort 시키기
# sort 시킨 array의 k번째 원소 구하기
def solution(array, commands):
    answer = []

    # commands 길이만큼 반복
    for i in range(len(commands)):
        arr = array[commands[i][0] - 1 : commands[i][1]]
        arr.sort()
        answer.append(arr[commands[i][2] - 1])
    return answer