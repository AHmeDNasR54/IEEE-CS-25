#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n, t;
    cin>>n>>t;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int start = 0, end = 0;
    long long cs = 0;
    int maxbBooks = 0;

    while (end < n) {
        cs += a[end];

        while (cs > t) {
            cs -= a[start];
            start++;
        }

        maxbBooks = max(maxbBooks, end - start + 1);

        end++;
    }

    cout<<maxbBooks<< endl;
    return 0;
}
