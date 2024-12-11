#include <iostream>
#include <vector>
#include <queue>

using namespace std;

const int dx[] = { -1, 1, 0, 0 };
const int dy[] = { 0, 0, -1, 1 };

void bfs(int x, int y, vector<vector<char>>& grid, vector<vector<bool>>& visited, int n, int m) {
    queue<pair<int, int>> q;
    q.push({ x, y });
    visited[x][y] = true;

    while (!q.empty()) {
        pair<int, int> current = q.front();
        int cx = current.first;
        int cy = current.second;
        q.pop();

        for (int i = 0; i < 4; ++i) {
            int nx = cx + dx[i];
            int ny = cy + dy[i];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == '.' && !visited[nx][ny]) {
                visited[nx][ny] = true;
                q.push({ nx, ny });
            }
        }
    }
}

int main() {
    int n, m;
    cin>>n>>m;

    vector<vector<char>> grid(n, vector<char>(m));
    vector<vector<bool>> visited(n, vector<bool>(m, false));

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            cin>>grid[i][j];
        }
    }

    int rmcount = 0;

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            if (grid[i][j] == '.' && !visited[i][j]) {
                bfs(i, j, grid, visited, n, m);
                ++rmcount;
            }
        }
    }

    cout<< rmcount<<endl;
    return 0;
}
