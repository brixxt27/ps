#include <iostream>
#include <vector>
#include <chrono>

using namespace std;
using namespace std::chrono;

int main() {
    const int N = 1000000;
    
    cout << "=== Vector 선언 방식 비교 ===" << endl;
    
    // 방법 4: push_back으로 채우기 (reserve 후)
    auto start4 = high_resolution_clock::now();
    vector<int> arr4;
    arr4.reserve(N);
    for (int i = 0; i < N; i++) {
        arr4.push_back(i);  // 실제로는 입력값이 들어감
    }
    auto end4 = high_resolution_clock::now();
    cout << "4. reserve + push_back: " << duration_cast<microseconds>(end4 - start4).count() << " microseconds" << endl;
		cout << "capacity: " << arr4.capacity() << "size: " << arr4.size() << endl;
    
    // 방법 1: vector<int> arr(N) - 0으로 초기화
    auto start1 = high_resolution_clock::now();
    vector<int> arr1(N);
    for (int i = 0; i < N; i++) {
			arr1[i] = i;
    }
    auto end1 = high_resolution_clock::now();
    cout << "1. vector<int> arr(N): " << duration_cast<microseconds>(end1 - start1).count() << " microseconds" << endl;
		cout << "capacity: " << arr1.capacity() << "size: " << arr1.size() << endl;
    
    // 방법 3: vector<int> arr; arr.resize(N) - 0으로 초기화
    auto start3 = high_resolution_clock::now();
    vector<int> arr3;
    arr3.resize(N);
    for (int i = 0; i < N; i++) {
			arr3[i] = i;
    }
    auto end3 = high_resolution_clock::now();
    cout << "3. resize(N): " << duration_cast<microseconds>(end3 - start3).count() << " microseconds" << endl;
		cout << "capacity: " << arr3.capacity() << "size: " << arr3.size() << endl;
    
    
    return 0;
}
