#include <stdio.h>

int main() {
	int a, b, c, d = -1;
	int input, result;
	int count=0; // 사이클 길이

	scanf("%d", &input);
	result = input;

	while (d != result) { // 새로운 수랑 결과가 같을때까지 반복
		a = input % 10; // 내가 넣은 수의 일의 자리 수
		b = input / 10; // 내가 넣은 수의 십의 자리 수
		c = (a + b) % 10; // 합의 가장 오른쪽
		d = a*10 + c; // 새로운 수

		input = d;
		count++;
	}

	printf("%d\n", count);

	return 0;
}