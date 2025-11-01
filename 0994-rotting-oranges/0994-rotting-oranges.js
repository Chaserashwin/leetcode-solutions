/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let queue = [];

    //putting the rotten oranges in the stack
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 2) {
                queue.push([i,j,0]);
            }
        }
    }

    let maxMinutes = 0;

    //mark the adj nodes as rotten and push in queue till it's not empty
    while(queue.length) {
        let [x,y,level] = queue.shift();
        // left
        if(x > 0 && grid[x-1][y] === 1) {
            grid[x-1][y] = 2;
            queue.push([x-1,y,level+1]);
        }
        // right
        if(x < m-1 && grid[x+1][y] === 1) {
            grid[x+1][y] = 2;
            queue.push([x+1,y,level+1]);
        }
        // top
        if(y > 0 && grid[x][y-1] === 1) {
            grid[x][y-1] = 2;
            queue.push([x,y-1,level+1]);
        }
        // bottom
        if(y < n-1 && grid[x][y+1] === 1) {
            grid[x][y+1] = 2;
            queue.push([x,y+1,level+1]);
        }
        maxMinutes = Math.max(level, maxMinutes);
    }

    //finally run over each element and check if any fresh is still remaining
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(grid[i][j] === 1) {
                return -1;
            }
        }
    }

    return maxMinutes;
 };
