#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    long long n, d;
    cin>>n>>d;

    long long* arr = new long long[n]; 
    for (long long i = 0; i < n; i++) {
        cin>>arr[i];
    }

    long long count = 0; int j = 0; 

    for (int i = 0; i < n; i++) {
        while (j < n && arr[j] - arr[i] <= d) {
            j++;
        } 
        long long len = j - i - 1;
        if (len >= 2) {
            count+=(len * (len - 1))/2;
        }
    }

    cout<<count<<endl;

    delete[] arr;
    return 0;
}
