class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    add(value) {
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = []
        }
    }

    addEdge(u, v) {
        if (!this.adjacencyList[u] || !this.adjacencyList[v]) return;

        this.adjacencyList[u].push(v)
        this.adjacencyList[v].push(u)
    }

    countComponents() {
        let count = 0;
        let visited = {};

        let dfs = (node) => {
            if (visited[node]) return 0

            visited[node] = true;

            for (const n of this.adjacencyList[node]) {
                dfs(n);
            }
            return 1
        }

        for (const key in this.adjacencyList) {
            count += dfs(key)
        }

        return count
    }
    getComponents() {
        let visited = {};
        let result = []

        let dfs = (node, compo) => {
            visited[node] = true;
            compo.push(node);
            for (const neighbor of this.adjacencyList[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor, compo);
                }
            }
        }

        for (const key in this.adjacencyList) {
            if (!visited[key]) {
                let compo = []
                dfs(key, compo)
                result.push(compo)
            }
        }
        return result
    }
}

let graph = new Graph();
graph.add(0)
graph.add(1)
graph.add(2)
graph.add(3)
graph.add(4)
graph.addEdge(0, 1)
graph.addEdge(2, 1)
graph.addEdge(3, 4)

console.log('coutn of connected comp', graph.countComponents());
console.log('connected comp', graph.getComponents());
