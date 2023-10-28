def solution(number):
    count = 0

    for a in range(len(number) - 2):
        for b in range(1, len(number) - 1):
            for c in range(2, len(number)):
                sum = number[a] + number[b] + number[c]
                if (sum == 0) and a < b and b < c:
                    print(number[a], number[b], number[c])
                    count += 1

    return count