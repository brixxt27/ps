#include <iostream>
#include <vector>

int main() {
  int N;
  size_t maxIdx;
  std::vector<int> ham;
  bool perfectHam = true;
  size_t max = 0; // max를 for 문 안에 뒀는데 그렇게 하면 반복할 때마다 0으로 초기화 된다. 비교하기 위해선 꼭 0으로 초기화를 거쳐야 하는데 그렇기에 반복문에 있으면 안 된다.
  int res = 0;

  std::cin >> N;
  for (int i = 0; i < N; i++) {
    int k;

    std::cin >> k;
    ham.push_back(k);

    res += k;

    if (k > max) {
      maxIdx = i;
      max = k;
    }
  }

  for (int i = maxIdx; i < N - 1; i++) {
    if (ham[i] < ham[i + 1]) {
      perfectHam = false;
      break;
    }
  }

  for (int i = 0; i < maxIdx; i++) {
    if (ham[i] > ham[i + 1]) {
      perfectHam = false;
      break;
    }
  }

  if (perfectHam == false)
    res = 0;

  std::cout << res << std::endl;
}