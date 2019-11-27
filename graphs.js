class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v){
        this.AdjList.set(v,[]);
    }
    addEdge(v,w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v); //In the case of an undirected graph
    }
    printGraph()
    {
        var get_keys = this.AdjList.keys();
        for (var i of get_keys) {
            var get_values = this.AdjList.get(i);
            var conc = "";

            for (var j of get_values)
                conc += j + " ";

            console.log(i + " -> " + conc);
        }
    }
    bfs(startingNode){
        var visited = [];
        for(var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        var q = [];
        visited[startingNode] = true;
        q.push(startingNode);

        while (q.length !== 0) {
            var getQueueElement = q.shift();
            console.log(getQueueElement);

            var get_List = this.AdjList.get(getQueueElement);
            // queue if it is not processed yet
            for (var i in get_List) {
                var neigh = get_List[i];

                if (!visited[neigh]) {
                    visited[neigh] = true;
                    q.push(neigh);
                }
            }
        }

    }

    dfs(startingNode){
        var visited = [];
        for(var i = 0; i < this.noOfVertices; i++)
            visited[i] = false;

        this.DFSUtil(startingNode, visited);
    }

    DFSUtil(vert, visited){
        visited[vert] = true;
        console.log(vert);

        var get_neighbours = this.AdjList.get(vert);

        for(var i in get_neighbours){
            var get_elem = get_neighbours[i];
            if(!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}

var g = new Graph(6);
var vertices = ['A','B','C','D','E','F'];

for (var i of vertices) {
    g.addVertex(i);
}

g.addEdge('A','B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();

console.log("BFS");
g.bfs('A');

console.log("DFS");
g.dfs('A');