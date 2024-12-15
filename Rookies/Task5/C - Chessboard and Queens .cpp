#include <iostream>
#include <vector>
using namespace std;

int cways = 0;
vector<string> board(8);
vector<bool> col(8, false), diag1(15, false), diag2(15, false);

void placeQueens(int row) {
    if (row == 8) { 
        cways++;
        return;
    }

    for (int c = 0; c < 8; c++) {
        if (board[row][c] == '*' || col[c] || diag1[row - c + 7] || diag2[row + c])
            continue;

        col[c] = diag1[row - c + 7] = diag2[row + c] = true;

        placeQueens(row + 1);

       col[c] = diag1[row - c + 7] = diag2[row + c] = false;
    }
}

int main() {
    for (int i = 0; i < 8; i++) {
        cin >> board[i];
    }

    placeQueens(0);

    cout<< cways <<endl;
    return 0;
}
