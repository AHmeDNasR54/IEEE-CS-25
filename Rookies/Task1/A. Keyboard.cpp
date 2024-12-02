#include <iostream>
using namespace std;
int main() {


    string k1 = "qwertyuiop", k2 = "asdfghjkl;", k3 = "zxcvbnm,./";
    string tot = k1 + k2 + k3;
    char c;cin >> c;
    string mess;cin >> mess;
    for (int i = 0;i < mess.length();i++) {
        for (int j = 0;j < tot.length();j++)
        {
            if (mess[i] == tot[j])
            {
                if (c == 'R')
                {
                    mess[i] = tot[j - 1];
                }
                else mess[i] = tot[j + 1];
                break;
            }
        }
    }
    cout << mess;



    return 0;
}
