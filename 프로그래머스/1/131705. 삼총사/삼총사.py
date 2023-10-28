def solution(number):
    count = 0

    for i in range(len(number) - 2):
        for j in range(i+1, len(number) - 1):
            for k in range(j+1, len(number)):
                sum = number[i] + number[j] + number[k]
                if sum == 0:
                    count += 1

    return count
