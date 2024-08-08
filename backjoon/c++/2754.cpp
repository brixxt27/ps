#include <iostream>
#include <iomanip>
#include <vector>

int main() {
	std::string str;
	double ret = 0;

	std::cin >> str;

	char rank = str[0];
	char score = str[1];
	switch (rank) {
		case 'A':
			ret = 4.0;
			break;
		case 'B':
			ret = 3;
			break;
		case 'C':
			ret = 2;
			break;
		case 'D':
			ret = 1;
			break;
	}

	if (rank != 'F') {
		switch (score) {
			case '+':
				ret += 0.3;
				break;
			case '-':
				ret -= 0.3;
				break;
		}
	}
	std::cout << ret;
	if (ret == int(ret)) {
		std::cout << ".0";
	}
	std::cout << std::endl;
}