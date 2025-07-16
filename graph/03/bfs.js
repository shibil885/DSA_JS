class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    add(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
        }
    }

    bfs(vertex) {
        let visited = {};
        let queue = [vertex];
        visited[curr] = true;
        while (queue.length) {
            let curr = queue.shift();

            for (const n of this.adjacencyList[curr]) {
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n)
                }
            }
        }
    }
}