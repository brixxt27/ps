#include <iostream>
#include <sstream>
#include <string>

int main() {
  double W, R;
  int RM;

  std::cin >> W >> R;
  RM = W * (1 + (R / 30));
  std::cout << RM << std::endl;
	return 0;
}