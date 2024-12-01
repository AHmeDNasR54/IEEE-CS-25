#include <iostream>
using namespace std;
int main() {

    int n;
    cin >> n;
    int test = 1;
    int t = n;
    while (n)
    {
        int c = n % 10;
        if (c != 4 && c != 7)
        {
            if (t % 4 == 0 || t % 7 == 0 || t % 47 == 0 || t % 74 == 0 || t % 474 == 0 || t % 477 == 0 || t % 744 == 0 || t % 747 == 0)
                cout << "YES\n";
            else
                cout << "NO\n";
            test = 0;
            break;
        }
        n /= 10;
    }
    if (test)
        cout << "YES\n";



    return 0;
}
