#include <iostream>
using namespace std;

long long tline(long long v, long long k) {
    long long sum = 0;
    long long term = v;
    while (term > 0) {
        sum += term;
        term /= k;
    }
    return sum;
}

int main() {
    long long n, k;
    cin >> n >> k;

    long long low = 1, high = n, result = n;

    while (low <= high) {
        long long mid = low + (high - low) / 2;
        if (tline(mid, k) >= n) {
            result = mid;
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }

    cout << result << endl;
    return 0;
}
