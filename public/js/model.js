'use strict';
(function(){
    
    var model = function() {
        
        function getData(text = 'matrix') {
            return $.get( `http://omdbapi.com/?page=1&s=${text}`, function( data ) {
                console.log(data);
            })            
        }
        
        function getSortData(data) {
            return data.Search || false;
        }
        
        
        
        return {
            getData : getData,
            getSortData : getSortData
        }
    }
    
    window.app = window.app || {};
    window.app.model = model();

}());
