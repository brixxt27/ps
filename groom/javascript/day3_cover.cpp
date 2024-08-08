#include <iostream>
#include <sstream>

int main() {
  int T;
  int res = 0;

  std::cin >> T;
  for (int i = 0; i < T; i++) {
    int lhs, rhs;
    char op;

    std::cin >> lhs >> op >> rhs;
    switch (op) {
      case '+': res += (lhs + rhs); break;
      case '-': res += (lhs - rhs); break;
      case '*': res += (lhs * rhs); break;
      case '/': res += (lhs / rhs); break;
    }
  }
  std::cout << res << std::endl;
}