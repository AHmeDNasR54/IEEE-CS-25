#include <iostream>
#include <vector>
#include <cmath>
#include <climits>

using namespace std;

long long divApp(long long idx, long long g1, long long g2, const vector<long long>& w) {
    if (idx == w.size()) {
        return abs(g1 - g2);
    }
    long long diff1 = divApp(idx + 1, g1 + w[idx], g2, w);
    long long diff2 = divApp(idx + 1, g1, g2 + w[idx], w);
    return min(diff1, diff2);
}

int main() {
    long long n;cin>>n;
    vector<long long> w(n);
    for (long long i = 0; i < n; ++i) {
        cin >> w[i];
    }
    long long res = divApp(0, 0, 0, w);
    cout<<res<<endl;

    return 0;
}