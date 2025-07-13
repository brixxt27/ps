#include <iostream>
#include <algorithm>

using namespace std;

int main(void) {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);
	int N;

	cin >> N;
	int* arr = new int[N];
	// int arr[N]; // 동적으로 입력 받는 변수로도 정적 변수 형식으로 선언가능. 하지만 가변길이 배열이라 힙이 아니라 스택에 할당. Stack over flow 가능성이 존재한다.
	for (int i = 0; i < N; i++) {
		int input;
		cin >> input;
		arr[i] = input;
	}

	sort(arr, arr + N);
	for (int i = 0; i < N; i++) {
		cout << arr[i];
	}
	cout << '\n';
	delete[] arr;
}