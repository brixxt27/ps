#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;
typedef long long ll;

int main(void) {
	ll m = 0 /** 상자 개수 */
	, n = 0 /** 귤 개수 */;
	vector<ll> boxes;

	cin >> m >> n;
	for (int i = 0; i < m; i++) {
		ll l, w, h;
		cin >> l >> w >> h;
		boxes.push_back(l * w * h);
	}
	sort(boxes.rbegin(), boxes.rend());

	unsigned int boxCount = 0;
	ll remainedCount = n;
	for (auto box : boxes) {
		if (remainedCount <= 0) {
			break;
		}
		remainedCount -= box;
		boxCount++;
	}

	int printedResult;
	if (remainedCount > 0) {
		printedResult = -1;
	} else {
		printedResult = boxCount;
	}

	cout << printedResult << endl;
}