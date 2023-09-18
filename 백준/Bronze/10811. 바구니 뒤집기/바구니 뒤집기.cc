#include <stdio.h>

int main() {
	int basket[100] = { 0, };
	int balls, times;
	int a, b, c = 0;

	scanf("%d %d", &balls, &times);

	for (int i = 0; i < balls; i++) {
		basket[i] = i + 1;
	}

	for (int i = 0; i < times; i++) {
		scanf("%d %d", &a, &b);
		while (a < b) {
			c = basket[a-1];
			basket[a-1] = basket[b-1];
			basket[b-1] = c;
			a++;
			b--;
		}
	}

	for (int i = 0; i < balls; i++) {
		printf("%d ", basket[i]);
	}

	return 0;
}