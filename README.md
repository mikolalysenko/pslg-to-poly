pslg-to-poly
============
Converts a planar straight line graph into a polygon.

# Example

```javascript
var pslg2poly = require('pslg-to-poly')

var points = [
  [-1, 1],
  [ 1, 1],
  [ 1,-1],
  [-1,-1]
]

var edges = [[0,1], [1,2], [2,3], [3,0]]

console.log(pslg2poly(points, edges))
```

#### Output

```javascript
[ [ [ -1, 1 ], [ -1, -1 ], [ 1, -1 ], [ 1, 1 ] ] ]
```

# Install

```
npm i pslg-to-poly
```

# API

#### `require('pslg-to-poly')(points, edges)`
Converts a planar straight line graph into a complex polygon represented by a list of loops.

* `points` are the vertices of the pslg
* `edges` are the edges of the pslg

**Returns** an array of loops encoding the boundary of the interior of the input pslg

# License
(c) 2015 Mikola Lysenko. MIT License
