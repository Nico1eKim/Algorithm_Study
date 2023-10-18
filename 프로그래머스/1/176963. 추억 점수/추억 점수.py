def solution(name, yearning, photo):
    my_dictionary = {}
    answer = []

    for i in range(len(name)):
        my_dictionary[name[i]] = yearning[i]

    for i in range(len(photo)):
        missing_value = 0
        for photo_name in photo[i]:
            for key in my_dictionary.keys():
                if photo_name == key:
                    missing_value += my_dictionary[key]

        answer.append(missing_value)

    return answer