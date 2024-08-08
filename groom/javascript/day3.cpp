#include <iostream>
#include <sstream>

int main() {
  int T;
  std::string exp;
  int lhs, rhs;
  char op;
  int res = 0;
  std::istringstream iss; // test

  std::cin >> T;
  std::cin.ignore();
  for (int i = 0; i < T; i++) {
    std::getline(std::cin, exp);
    // std::cout << "getline: " << exp << std::endl; // test
    iss.str(exp);
    iss >> lhs >> op >> rhs;
    // std::cout << "iss: " << lhs << op << rhs << std::endl; // test
    switch (op) {
      case '+':
        res += (lhs + rhs);
        break;
      case '-':
        res += (lhs - rhs);
        break;
      case '*':
        res += (lhs * rhs);
        break;
      case '/':
        res += (lhs / rhs);
        break;
    }
    iss.clear();
    // std::cout << "res: " << res << std::endl; // test
  }
  // std::cout << res << std::endl;
}