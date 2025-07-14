#include <iostream>
#include <vector>

using namespae std;

int getSolution() {
	int N;
	cin >> N;
	vector<int> numbers;
	// 수열 저장
	for (int i = 0; i < N; i++) {
		int n = 0;
		cin >> n;
		numbers.push_back(n);
	}

	int sum = 0;
	int max = 0;
	return sum;
}

/**
 * t는 for문 전용 변수이고, 출력은 1부터 세어야 하기 때문에 1을 더해야 한다.
 */
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