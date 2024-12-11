#include <iostream>
#include <queue>
#include <vector>
#include <string>
using namespace std;

struct Pos{
    int x, y, moves;
};

pair<int, int> toIndices(const string& pos) {
    return { pos[0] - 'a', pos[1] - '1' };
}

int bfs(const string& start, const string& destination) {
    vector<pair<int, int>> moves = {
        {2, 1}, {2, -1}, {-2, 1}, {-2, -1},
        {1, 2}, {1, -2}, {-1, 2}, {-1, -2}
    };

    pair<int, int> stIn = toIndices(start);
    pair<int, int> desIn = toIndices(destination);
    int startX = stIn.first, startY = stIn.second;
    int destX = desIn.first, destY = desIn.second;

    if (startX == destX && startY == destY) {
        return 0; 
    }

    queue<Pos> q;
    q.push({ startX, startY, 0 });

    vector<vector<bool>> visited(8, vector<bool>(8, false));
    visited[startX][startY] = true;

    while (!q.empty()) {
        Pos current = q.front();
        q.pop();

        for (const auto& move : moves) {
            int nx = current.x + move.first;
            int ny = current.y + move.second;

            if (nx >= 0 && nx < 8 && ny >= 0 && ny < 8) {
                if (nx == destX && ny == destY) {
                    return current.moves + 1; 
                }

                if (!visited[nx][ny]) {
                    visited[nx][ny] = true;
                    q.push({ nx, ny, current.moves + 1 });
                }
            }
        }
    }

    return -1;
}

int main() {
    int test;
    cin>>test;

    while(test--) {
        string s, d;
        cin >> s >> d;

        cout<<bfs(s, d)<<endl;
    }

    return 0;
}
