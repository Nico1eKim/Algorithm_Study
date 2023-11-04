def solution(arr):
    if len(arr) > 1:
        num = min(arr)
        arr.remove(num)
        return arr
    return [-1]


print(solution([10]))
