#include <stdio.h>

int main() {
	int A[10], B[10], diff = 0;

	for (int i = 0; i < 10; i++) {
		scanf("%d", &A[i]);
		B[i] = A[i] % 42;
	}

	for (int j = 0; j < 10; j++) {
		int cnt = 0;
		for (int k = j+1; k < 10; k++) {
			if (B[k] == B[j])
				cnt++;
		}
		if (cnt == 0)
			diff++;
	}

	printf("%d", diff);

	return 0;
}