#include <iostream>
#include <vector>

using namespace std;
vector<long long>w;
void weAlgo(long long n) {
    if (n == 1) {
        w.push_back(n);

        return;
    }
    
    if (n % 2 == 0)
    {
        w.push_back(n);
        weAlgo(n /= 2);
    }
    else
    {
        w.push_back(n);
        n *= 3;
        n += 1;
        weAlgo(n);
    }
}

int main() {
    long long n;cin>>n;
    weAlgo(n);
    for (long long i = 0;i < w.size();i++)
        cout << w[i] << " ";

    return 0;
}