class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    add(val) {
        if (!this.adjacencyList[val]) {
            this.adjacencyList[val] = []
        }
    }

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
            return;
        }
        this.adjacencyList[v1].push(v2);
    }

    detectCycle() {
        let visited = new Set();
        let recStack = new Set();

        for (const node in this.adjacencyList) {
            if (this.dfs(node, visited, recStack)) {
                return true
            }
        }
        return false
    }
    dfs(node, visited, recStack) {
        if (recStack.has(node)) return true // same path, so cycle detect;
        if (visited.has(node)) return false // already processed

        recStack.add(node)
        visited.add(node)

        for (const n of this.adjacencyList[node]) {
            if (this.dfs(n, visited, recStack)) return true;
        }


        recStack.delete(node); // existing path dont have cycle, so remove it 
        /**
         *             **  ** this point
         * 1 - 2 - 3 - 6 - 7
         * |       |
         * -  5 -  4
         */
        return false
    }
    log() {
        for (const key in this.adjacencyList) {
            console.log(key, '-> ', this.adjacencyList[key]);

        }
    }
}

let graph = new Graph();

graph.add(1)
graph.add(2)
graph.add(3)
graph.add(4)
graph.add(5)
graph.add(6)
graph.add(7)
graph.add(8)
graph.add(9)
graph.add(10)

graph.addEdge(1, 2)
graph.addEdge(2, 3)
graph.addEdge(3, 4)
graph.addEdge(4, 1)

graph.log();
console.log(graph.detectCycle());
