'use strict'

var cdt2d     = require('cdt2d')
var boundary  = require('simplicial-complex-boundary')

module.exports = pslgToPolygon

function pslgToPolygon(points, edges) {
  //Get cells
  var cells = cdt2d(points, edges, {
    delaunay: false,
    exterior: false })

  //Extract boundary
  var bnd = boundary(cells)

  //Construct adjacency list from boundary
  var adj = new Array(points.length)
  for(var i=0; i<points.length; ++i) {
    adj[i] = []
  }

  for(var i=0; i<bnd.length; ++i) {
    var e = bnd[i]
    adj[e[0]].push(e[1])
  }

  //Extract boundary cycle
  var loops = []
  for(var i=0; i<points.length; ++i) {
    if(adj[i].length === 0) {
      continue
    }
    var v = i, loop = []
    do {
      loop.push(points[v])
      v = adj[v].pop()
    } while(v !== i)
    loops.push(loop)
  }

  return loops
}
