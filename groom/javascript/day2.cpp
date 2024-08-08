#include <iostream>

using namespace std;

int main() {
  int N, T, M;

  cin >> N;
  cin >> T;
  cin >> M;
  
  for (int i = 0; i < N; i++) {
    int c;
    cin >> c;
    M += c;
  }

  T += M / 60;
  M %= 60;
  T %= 24;

  cout << T << " " << M << endl;
}