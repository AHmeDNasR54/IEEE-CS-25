#include <iostream>
#include <set>
#include <string>
#include <algorithm>

using namespace std;

set<string> uniq;

void generatePermutations(string& s, int index) {
    if (index == s.size()) {
        uniq.insert(s);
        return;
    }
    for (int i = index; i < s.size(); i++) {
        if (i != index && s[i] == s[index]) continue;

        swap(s[i], s[index]);

        generatePermutations(s, index + 1);

        swap(s[i], s[index]);
    }
}

int main() {
    string s;
    cin >> s;

    sort(s.begin(), s.end());
    generatePermutations(s, 0);

    cout<< uniq.size()<<endl;
    for (const string& perm : uniq) {
        cout << perm << endl;
    }

    return 0;
}
