#include <iostream>
#include <vector>

using namespace std;

/**
 * 연산할 N개의 숫자를 지닌 수열 가져오기
 */
vector<int> getTargetSequence(int N) {
	vector<int> numbers;
	numbers.reserve(N);
	for (int i = 0; i < N; i++) {
		int n = 0;
		cin >> n;
		numbers.push_back(n);
	}
	return numbers;
}

int getSolution() {
	int N;
	cin >> N;
	vector<int> numbers = getTargetSequence(N);

	int sum = 0;
	int max = 0;
	// 0부터 N-2번째까지 수열을 순회하며 수열에서 가장 큰 부분을 탐색
	for (int i = 0; i < N - 1; i++) {
		// 자신 보다 크고, 수열에서 가장 큰 숫자를 찾음
		max = numbers[i];
		for (int j = i + 1; j < N; j++) {
			if (max < numbers[j]) {
				max = numbers[j];
			}
		}
		// 자신보다 크고, 수열에서 가장 큰 숫자가 존재하면 그 숫자를 sum에 더함
		// 현재 숫자(자신)는 sum에서 뺌
		if (numbers[i] < max) {
			sum += max;
			sum -= numbers[i];
		}
		max = 0;
	}
	return sum;
}

void printString(int t, int sum) {
	cout << "#" << t + 1 << " " << sum << endl;
}

int main(int argc, char** argv)
{
	int i;
	int T;
	cin >> T;
	for(i = 0; i < T; ++i) {
		int res = getSolution();
		printString(i, res);
	}
	return 0;
}