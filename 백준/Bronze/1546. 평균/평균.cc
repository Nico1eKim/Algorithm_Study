#include <stdio.h>

int main() {
	int n; // 시험 본 과목의 개수
	int max = 0;
	double sum = 0;

	scanf("%d", &n);

	int A[1000];

	for (int i = 0; i < n; i++) {
		scanf("%d", &A[i]);

		if (A[i] > max)
			max = A[i];
	}

	for (int k = 0; k < n; k++) {
		sum += (double)A[k] / max * 100;
	}

	printf("%f", sum / n);

	return 0;
}