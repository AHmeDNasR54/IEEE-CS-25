#include <iostream>
#include<limits>
using namespace std;
int main() {



    int n;cin >> n;
    string d;cin >> d;
    int* arr = new int[n];
    int mint = INT_MAX, t, test = 0;
    for (int i = 0;i < n;i++) {
        cin >> arr[i];
        if (i > 0 && d[i] == 'L' && d[i - 1] == 'R')
        {
            t = (arr[i] - arr[i - 1]) / 2;
            if (t < mint)
                mint = t;

            test = 1;
        }

    }
    if (test)
    {
        cout << mint;
    }
    else cout << -1;
    delete[]arr;


    return 0;
}
