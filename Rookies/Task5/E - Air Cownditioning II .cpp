#include <iostream>
#include <vector>
#include <climits>
#include <cstring>

using namespace std;

const int MAXN = 20;
const int MAXM = 10;
const int MAXSTALLS = 100;
int N, M;
int s[MAXN], t[MAXN], c[MAXN];
int a[MAXM], b[MAXM], p[MAXM], m[MAXM];
int dp[1 << MAXM][MAXSTALLS + 1];

bool canCool(int cooling[], int needCooling[]) {
    for (int i = 1; i <= MAXSTALLS; ++i) {
        if (cooling[i] < needCooling[i]) {
            return false;
        }
    }
    return true;
}

int solve(int mask, int cooling[], int needCooling[]) {
    if (canCool(cooling, needCooling)) {
        return 0;
    }
    if (dp[mask][0] != -1) {
        return dp[mask][0];
    }

    int result = INT_MAX;

    for (int i = 0; i < M; ++i) {
        if (mask & (1 << i)) continue;

        int newCooling[MAXSTALLS + 1];
        memcpy(newCooling, cooling, sizeof(newCooling));

        for (int j = a[i]; j <= b[i]; ++j) {
            newCooling[j] += p[i];
        }

        result = min(result, m[i] + solve(mask | (1 << i), newCooling, needCooling));
    }

    dp[mask][0] = result;
    return result;
}

int main() {
    cin>>N>>M;

    int needCooling[MAXSTALLS + 1] = { 0 };
    int cooling[MAXSTALLS + 1] = { 0 };

    for (int i = 0; i < N; ++i) {
        cin>>s[i]>>t[i]>>c[i];
        for (int j = s[i]; j <= t[i]; ++j) {
            needCooling[j] += c[i];
        }
    }

    for (int i = 0; i < M; ++i) {
        cin>>a[i]>>b[i]>>p[i]>>m[i];
    }

    memset(dp, -1, sizeof(dp));
    int result = solve(0, cooling, needCooling);

    cout<<result<<endl;
    return 0;
}
