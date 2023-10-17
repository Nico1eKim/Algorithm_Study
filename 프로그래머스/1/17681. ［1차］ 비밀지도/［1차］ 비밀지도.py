# 배열의 각 요소들을 2진수로 변환
# 두 배열 or 연산
# 1이면 #, 0이면 공백 출력
def dec_to_binary(arr):
    new_arr = []
    for n in arr:
        binary = format(n, "b").zfill(len(arr))
        new_arr.append(binary)

    return new_arr


def solution(n, arr1, arr2):
    new_arr = []
    arr1 = dec_to_binary(arr1)
    arr2 = dec_to_binary(arr2)

    for i in range(n):
        new_binary = ""
        for j in range(n):
            if arr1[i][j] == "1" or arr2[i][j] == "1":
                new_binary += "#"
            else:
                new_binary += " "
        new_arr.append(new_binary)

    return(new_arr)