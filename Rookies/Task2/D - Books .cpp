#include <iostream>
using namespace std;

int main() {
    int n, t;
    cin >> n >> t;

    int* arr = new int[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }

    int m= 0, sumt = 0;
    int left = 0;

    for (int right = 0; right < n; right++) {
        sumt += arr[right];

        while(sumt > t) {
            sumt -= arr[left];
            left++;
        }
        m = max(m, right - left + 1);
    }

    cout<<m<<endl;

    delete[]arr;
    return 0;
}
