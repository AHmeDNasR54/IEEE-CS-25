

#include <iostream>
#include<algorithm>

using namespace std;
int main()
{
    long long  n;cin >> n;
    int* arr = new int[n];
    for (long long i = 0;i < n;i++)
        cin >> arr[i];
    int q;cin >> q;
    int* arr2 = new int[q];
    for (int i = 0;i < q;i++)
        cin >> arr2[i];
    sort(arr, arr + n);
    for (int i = 0; i < q; i++) {
       
        cout << upper_bound(arr, arr + n, arr2[i]) - arr<< endl;
    }

    delete[]arr;delete [] arr2;

}

