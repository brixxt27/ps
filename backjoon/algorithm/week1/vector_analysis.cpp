#include <iostream>
#include <vector>
#include <chrono>

using namespace std;
using namespace std::chrono;

int main() {
    const int N = 5;
    cout << "=== 벡터 사용법 정확한 분석 ===" << endl;
    
    // 1. vector<int> arr(N)
    cout << "1. vector<int> arr(N):" << endl;
    auto start1 = high_resolution_clock::now();
    vector<int> arr1(N);
    auto end1 = high_resolution_clock::now();
    
    cout << "   시간: " << duration_cast<microseconds>(end1 - start1).count() << " microseconds" << endl;
    cout << "   size: " << arr1.size() << ", capacity: " << arr1.capacity() << endl;
    cout << "   초기값들: ";
    for (int i = 0; i < N; i++) {
        cout << arr1[i] << " ";
    }
    cout << endl;
    
    // 2. vector<int> arr; arr.resize(N)
    cout << "\n2. vector<int> arr; arr.resize(N):" << endl;
    auto start2 = high_resolution_clock::now();
    vector<int> arr2;
    arr2.resize(N);
    auto end2 = high_resolution_clock::now();
    
    cout << "   시간: " << duration_cast<microseconds>(end2 - start2).count() << " microseconds" << endl;
    cout << "   size: " << arr2.size() << ", capacity: " << arr2.capacity() << endl;
    cout << "   초기값들: ";
    for (int i = 0; i < N; i++) {
        cout << arr2[i] << " ";
    }
    cout << endl;
    
    // 3. vector<int> arr; arr.reserve(N)
    cout << "\n3. vector<int> arr; arr.reserve(N):" << endl;
    auto start3 = high_resolution_clock::now();
    vector<int> arr3;
    arr3.reserve(N);
    auto end3 = high_resolution_clock::now();
    
    cout << "   시간: " << duration_cast<microseconds>(end3 - start3).count() << " microseconds" << endl;
    cout << "   size: " << arr3.size() << ", capacity: " << arr3.capacity() << endl;
    cout << "   접근 가능한 원소 개수: " << arr3.size() << " (size 기준)" << endl;
    
    // 4. 성능 비교를 위한 큰 크기 테스트
    cout << "\n=== 큰 크기 (100,000,000) 성능 비교 ===" << endl;
    const int BIG_N = 100000000;
    
    auto big_start2 = high_resolution_clock::now();
    vector<int> big_arr2;
    big_arr2.resize(BIG_N);
    auto big_end2 = high_resolution_clock::now();
    cout << "1. resize(N): " << duration_cast<microseconds>(big_end2 - big_start2).count() << " microseconds" << endl;
    
    auto big_start3 = high_resolution_clock::now();
    vector<int> big_arr3;
    big_arr3.reserve(BIG_N);
    auto big_end3 = high_resolution_clock::now();
    cout << "2. reserve(N): " << duration_cast<microseconds>(big_end3 - big_start3).count() << " microseconds" << endl;
    
    auto big_start1 = high_resolution_clock::now();
    vector<int> big_arr1(BIG_N);
    auto big_end1 = high_resolution_clock::now();
    cout << "3. vector<int> arr(N): " << duration_cast<microseconds>(big_end1 - big_start1).count() << " microseconds" << endl;
    return 0;
}
