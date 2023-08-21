#include <iostream>
#include <string>
#include <vector>
#include <array>
/*
3
abc
a b c 1 2 3, 6
*******************

4
abcd
a b cd, 1 3 6, 10
a bc d, 1 4 7, 12
ab c d, 2 5 7, 14

a ab b bc c cd d
1 2  3 4  5 6  7

********************

4
aaaa
a a aa
a aa a
aa a a 2 1 1, 4

a aa

********************

5
abcde
a b cde 1 4 9, 14
a bc de 1 5 11, 17
a bcd e 1 6 12, 19
ab c de 2 7 11, 20
ab cd e 2 8 12, 22
abc d e 3 10 12, 25

a ab abc b bc bcd c cd cde d de e
1 2  3   4 5  6   7 8  9   10 11 12
*/

using namespace std;

int main() {
  int N;
  string s;
  vector<array<string, 3> > v;
  int a = 0;
  int b = 1;
  int c = 2;

  cin >> N;
  cin >> s;

  while (1) {
    if (c == N)
      break;
    v.push_back(array<string, 3>({
        s.substr(a, b - a),
        s.substr(b, c - b),
        s.substr(c, N - c)
    }));
    c++;
  }

  for (const auto& it: v) {
    cout << "*****" << endl;
    cout << it[0] << endl;
    cout << it[1] << endl;
    cout << it[2] << endl;
  }
}