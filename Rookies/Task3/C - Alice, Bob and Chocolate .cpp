#include <iostream>
using namespace std;

int main() {
    
    int n;cin >> n;int*arr = new int[n];
    for (int i = 0;i < n;i++)
        cin >> arr[i];
    int left = 0, right = n - 1, cleft = 0,cright=0, lright = 0,tleft,tright;

    while (left <= right)
    {
        if (left == 0 && right == n - 1) {
            tleft = arr[left];
            tright = arr[right];
        }

        if (tleft > tright) {
            right--;
            cright++;
            tleft -= tright;
            tright = arr[right];
        }
        else {
            left++;
            cleft++;
            tright -= tleft;
            tleft = arr[left];
        }
    }
    cout << cleft << " " << cright << endl;

    delete[]arr;
}
