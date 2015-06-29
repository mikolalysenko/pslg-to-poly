'use strict'

var pslg2poly = require('../pslg-to-poly')


var points = [
  [-1, 1],
  [ 1, 1],
  [ 1,-1],
  [-1,-1]
]

var edges = [[0,1], [1,2], [2,3], [3,0]]

console.log(pslg2poly(points, edges))
