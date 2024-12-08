#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int n;cin>>n;int* arr =new int[n];
    for (int i = 0; i < n; i++) {
        cin>>arr[i];
    }

    sort(arr, arr + n);

    int left = 0, right = 0;
    int maxCount = 0;
    while (right < n) {
        if (arr[right] - arr[left] <= 5) {
            maxCount = max(maxCount, right - left + 1);
            right++;
        }
        else {
            left++;
        }
    }

    cout<<maxCount<<endl;

    delete[] arr;
    return 0;
}
