'use strict';

var expect = require('chai').expect;
var DFS = require('../lib/index');


        // a -> b -> c -> d
        //  --------->
        //  -------------->
    describe('Simple Graph', function() {     
        var dfs = new DFS();
        dfs.addEdge("a","b",1);
        dfs.addEdge("b","c",1);
        dfs.addEdge("c","d",1);
        dfs.addEdge("a","c",1);        
        dfs.addEdge("a","d",1);    
        dfs.addEdge("d","a",1);    



    });

   