#include <iostream>

using namespace std;

int getSumOfOddNumber() {
	int n = 0;
	int sum = 0;
	for (int i = 0; i < 10; i++) {
		cin >> n;
		if (n % 2 == 1) {
			sum += n;
		} else continue;
	}
	return sum;
}

int main(int argc, char** argv)
{
	int test_case;
	int T;
	cin>>T;
	for(test_case = 1; test_case <= T; ++test_case)
	{
		int sum;
		sum = getSumOfOddNumber();
		cout << "#" << test_case << " " << sum << endl;


	}
	return 0;//정상종료시 반드시 0을 리턴해야합니다.
}