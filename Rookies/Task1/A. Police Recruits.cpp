#include <iostream>
using namespace std;
int main() {

    int n, * arr;cin >> n;
    arr = new int[n];
    int r = 0, c = 0;
    for (int i = 0;i < n;i++)
    {
        cin >> arr[i];
        if (arr[i] != -1)
            r += arr[i];
        else {
            if (r > 0)
                r--;
            else {
                c++;
            }
        }
    }
    cout << c;
    delete[]arr;


    return 0;
}
