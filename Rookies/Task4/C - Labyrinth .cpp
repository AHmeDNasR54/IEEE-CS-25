#include <iostream>
#include <vector>
#include <queue>
#include <string>
#include <algorithm>

using namespace std;

const int dx[] = { -1, 1, 0, 0 };
const int dy[] = { 0, 0, -1, 1 };
const char dir[] = { 'U', 'D', 'L', 'R' };

bool isValid(int x, int y, int n, int m, const vector<vector<char>>& grid, vector<vector<bool>>& visited) {
    return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] != '#' && !visited[x][y];
}

int main() {
    int n, m;
    cin>>n>>m;

    vector<vector<char>> grid(n, vector<char>(m));
    vector<vector<bool>> visited(n, vector<bool>(m, false));
    vector<vector<pair<int, int>>> parent(n, vector<pair<int, int>>(m, { -1, -1 }));

    pair<int, int> start, end;

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            cin >> grid[i][j];
            if (grid[i][j] == 'A') start = make_pair(i, j);
            if (grid[i][j] == 'B') end = make_pair(i, j);
        }
    }

    queue<pair<int, int>> q;
    q.push(start);
    visited[start.first][start.second] = true;

    bool found = false;

    while (!q.empty() && !found) {
        pair<int, int> front = q.front();
        int x = front.first;
        int y = front.second;
        q.pop();

        for (int i = 0; i < 4; ++i) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if (isValid(nx, ny, n, m, grid, visited)) {
                visited[nx][ny] = true;
                parent[nx][ny] = make_pair(x, y);
                q.push(make_pair(nx, ny));

                if (grid[nx][ny] == 'B') {
                    found = true;
                    break;
                }
            }
        }
    }

    if (found) {
        cout<<"YES"<<endl;

        string path;
        pair<int,int> current = end;
        while (current != start) {
            pair<int, int> p = parent[current.first][current.second];
            for (int i = 0; i < 4; ++i) {
                if (p.first + dx[i] == current.first && p.second + dy[i] == current.second) {
                    path.push_back(dir[i]);
                    break;
                }
            }
            current = p;
        }

        reverse(path.begin(), path.end());
        cout<<path.size()<< endl;
        cout<<path<< endl;
    }
    else {
        cout<<"NO"<<endl;
    }

    return 0;
}
