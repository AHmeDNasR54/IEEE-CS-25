#include <iostream>
using namespace std;
int main() {
   
    int n, * arr;
    cin >> n;
    arr = new int[n];
    int imin, imax,fmin=101,fmax=0;
    for (int i = 0;i < n;i++) {
        cin >> arr[i];
        if (arr[i] > fmax) {
            fmax = arr[i];
                imax = i;
        }
        if (arr[i] <= fmin) {
            fmin = arr[i];
            imin = i;
        }
    }
    int total_seconds = (((n - 1) - imin) + imax);
        if (imin < imax)
            total_seconds--;
        cout << total_seconds;
    delete[]arr;
    
    
  
    return 0;
}
