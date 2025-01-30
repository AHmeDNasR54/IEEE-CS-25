#include <iostream>
#include <vector>
using namespace std;

const int dx[]={ -1, 1, 0, 0 }; 
const int dy[]={ 0, 0, -1, 1 };

int n, m;
vector<vector<int>> grid;
vector<vector<bool>> visited;

int dfs(int x, int y) {
    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] == 0 || visited[x][y])
        return 0;

    visited[x][y] = true;
    int volume = grid[x][y];

   
    for (int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        volume += dfs(nx, ny);
    }

    return volume;
}

int main() {
    int t;
    cin >> t;

    while (t--) {
        cin>>n>>m;
        grid.assign(n, vector<int>(m));
        visited.assign(n, vector<bool>(m, false));

        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                cin >> grid[i][j];

        int maxVolume = 0;

      
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] > 0 && !visited[i][j]) {
                    maxVolume = max(maxVolume, dfs(i, j));
                }
            }
        }

        cout<<maxVolume<<endl;
    }

    return 0;
}
