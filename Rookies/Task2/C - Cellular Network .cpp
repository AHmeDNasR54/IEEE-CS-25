#include <iostream>
#include <cmath>
using namespace std;

bool isValid(long long r, long long* arrn, long long* arrm, int n, int m) {
    int j = 0;
    for (int i = 0; i < n; i++) {
        while (j < m && abs(arrn[i] - arrm[j]) > r) {
            j++;
        }
        if (j == m) {
            return false;
        }
    }
    return true;
}

int main() {
    long long n, m;
    cin >> n >> m;

    long long* arrn = new long long[n],* arrm = new long long[m];

    for (int i = 0; i < n; i++) {
        cin >> arrn[i];
    }
    for (int i = 0; i < m; i++) {
        cin >> arrm[i];
    }

    long long low = 0, high = 1e10, result = 1e10;

    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (isValid(mid, arrn, arrm, n, m)) {
            result = mid;      
            high = mid - 1;  
        }
        else {
            low = mid + 1;     
        }
    }

    cout<<result<<endl;

    delete[] arrn;
    delete[] arrm;

    return 0;
}
