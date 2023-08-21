function convertJsonToGraph(jsonData, parent = null) {
    const nodes = [];
    const edges = [];

    // root
    const rootNodeId = nodes.length; //0
    const rootNode = { id: rootNodeId, label: 'ROOT', type: 'root' };
    nodes.push(rootNode);

    function traverse(data, parent = null) {
        for (const key in data) {
        // key node
        const value = data[key];
        var nodeId = nodes.length;
        if(data instanceof Array){
            nodeId = parent; // skip adding of key node. Add only value node.
        }else{
            const node = { id: nodeId, label: key, type: 'key'};
            nodes.push(node);
            if (parent !== null) {
            edges.push({ source: parent, target: nodeId }); //link to parent node
            }
        }

        // value node
        if (value instanceof Object) { // [] or {} 
            traverse(value, nodeId); // recursive
        } else {
            const valueNodeId = nodes.length;
            const valueNode = { id: valueNodeId, label: value, type: 'value' };
            nodes.push(valueNode);
            edges.push({ source: nodeId, target: valueNodeId });
        }
        }
    }

    traverse(jsonData, rootNodeId);

    return { nodes, edges };
}


function buildHierarchy(nodeId, nodes, childMap) {
    const node = nodes.find(n => n.id === nodeId);
    const childrenIds = childMap[nodeId] || [];
    const children = childrenIds.map(childId => buildHierarchy(childId, nodes, childMap));
    return {
        id: node.id,
        name: node.label,
        type: node.type,
        children: children.length > 0 ? children : undefined
    };
}

function createHierarchy(data) {
    const childMap = {};
    data.edges.forEach(({ source, target }) => {
        if (!childMap[source]) {
        childMap[source] = [];
        }
        childMap[source].push(target);
    });
    
    const rootNodeId = data.nodes.find(n => !data.edges.some(e => e.target === n.id)).id;
    return buildHierarchy(rootNodeId, data.nodes, childMap);
}

/////以下、MitchTree用/////
function createNode(name, value, idCounter) {
    idCounter = idCounter || 0;

    const node = {
        "id": idCounter++,
        "type": "node",
        "name":"",
        "description":"",
        "childNum": 0,
        "children": []
    };

    if (name) {
        node.name = name;
        if (name=="root") node.type="root";
    } else {
        node.name = "Array";
    }

    if (typeof value === "object") {
        node.description = "";
    } else {
        node.description = value;
    }

    if (typeof value === "object") {
        node.children = Object.keys(value).map(key => createNode(key, value[key], idCounter));
        node.childNum = node.children.length;
    } else {
        node.type = "leaf";
    }

    return node;
}

function createLeaf(value, idCounter) {
    return {
        "id": idCounter++,
        "type": "leaf",
        "name": value,
        "description": value
    };
}

function convertJsonToGraph2(data){
    const rootNode = createNode("root", data)
    return rootNode;
}