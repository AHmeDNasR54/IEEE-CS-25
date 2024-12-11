#include <iostream>
#include <queue>
#include <vector>
#include <string>
using namespace std;

const int dx[] = { -1, 1, 0, 0 };
const int dy[] = { 0, 0, -1, 1 };
const char dir[] = { 'U', 'D', 'L', 'R' };

struct State {
    int x, y;
};

bool isValid(int x, int y, int n, int m, vector<string>& grid, vector<vector<int>>& monsterDist) {
    return x >= 0 && x < n && y >= 0 && y < m && grid[x][y] == '.' && monsterDist[x][y] == -1;
}

void bfsMonsters(vector<vector<int>>& monsterDist, vector<State>& monsters, vector<string>& grid) {
    queue<State> q;
    for (auto& monster : monsters) {
        q.push(monster);
        monsterDist[monster.x][monster.y] = 0;
    }

    while (!q.empty()) {
        State curr = q.front();
        q.pop();

        for (int d = 0; d < 4; d++) {
            int nx = curr.x + dx[d];
            int ny = curr.y + dy[d];

            if (isValid(nx, ny, grid.size(), grid[0].size(), grid, monsterDist)) {
                monsterDist[nx][ny] = monsterDist[curr.x][curr.y] + 1;
                q.push({ nx, ny });
            }
        }
    }
}

bool bfsPlayer(vector<vector<int>>& playerDist, vector<vector<int>>& monsterDist, State start, vector<string>& grid, string& path) {
    queue<State> q;
    int n = grid.size(), m = grid[0].size();

    q.push(start);
    playerDist[start.x][start.y] = 0;
    vector<vector<State>> parent(n, vector<State>(m, { -1, -1 }));

    while (!q.empty()) {
        State curr = q.front();
        q.pop();

        if (curr.x == 0 || curr.x == n - 1 || curr.y == 0 || curr.y == m - 1) {
            State p = curr;
            while (parent[p.x][p.y].x != -1) {
                State par = parent[p.x][p.y];
                for (int d = 0; d < 4; d++) {
                    if (par.x + dx[d] == p.x && par.y + dy[d] == p.y) {
                        path += dir[d];
                        break;
                    }
                }
                p = par;
            }
            reverse(path.begin(), path.end());
            return true;
        }

        for (int d = 0; d < 4; d++) {
            int nx = curr.x + dx[d];
            int ny = curr.y + dy[d];

            if (nx >= 0 && nx < n && ny >= 0 && ny < m && grid[nx][ny] == '.' && playerDist[nx][ny] == -1) {
                if (monsterDist[nx][ny] == -1 || monsterDist[nx][ny] > playerDist[curr.x][curr.y] + 1) {
                    playerDist[nx][ny] = playerDist[curr.x][curr.y] + 1;
                    parent[nx][ny] = curr;
                    q.push({ nx, ny });
                }
            }
        }
    }

    return false;
}

int main() {
    int n, m;
    cin>>n>>m;

    vector<string> grid(n);
    for (int i = 0; i < n; i++) {
        cin >> grid[i];
    }

    vector<State> monsters;
    State start;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (grid[i][j] == 'M') {
                monsters.push_back({ i, j });
            }
            else if (grid[i][j] == 'A') {
                start = { i, j };
            }
        }
    }

    vector<vector<int>> monsterDist(n, vector<int>(m, -1));
    vector<vector<int>> playerDist(n, vector<int>(m, -1));

    bfsMonsters(monsterDist, monsters, grid);

    string path;
    if (bfsPlayer(playerDist, monsterDist, start, grid, path)) {
        cout<< "YES\n";
        cout<< path.length()<< "\n";
        cout<<path<<"\n";
    }
    else {
        cout<<"NO\n";
    }

    return 0;
}
