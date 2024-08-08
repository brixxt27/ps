#include <iostream>
#include <vector>
#include <utility>
#include <algorithm>

bool compare(const std::pair<size_t, size_t>& left, const std::pair<size_t, size_t>& right) {
  if (left.first != right.first)
    return left.first > right.first;
  else
    return left.second > right.second;
}

size_t count_one(size_t num)
{
  size_t cnt = 0;

  while (num) {
    cnt += (num % 2);
    num /= 2;
  }
  return cnt;
}

int main() {
  size_t N, K;
  std::vector<std::pair<size_t, size_t> > v;

  std::cin >> N >> K;
  for (size_t i = 0; i < N; i++) {
    size_t num;
    size_t cnt_one;

    std::cin >> num;
    cnt_one = count_one(num);
    v.push_back(std::make_pair(cnt_one, num));
  }
  std::sort(v.begin(), v.end(), compare);
  // for (auto& i : v) {
  //   std::cout << i.first << ", " << i.second << std::endl;
  // }
  std::cout << v[K - 1].second << std::endl;
}