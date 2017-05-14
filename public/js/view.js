'use strict';
(function() {

    function Gallery (items) {   
        this.DOMElements = {
            input       : document.querySelector("#input-filmname"),
            contentDiv  : document.querySelector("#content")
        };

        //this.saveDefer = $.Deferred();
        this.items = items;
        this.counter = 0;
        
        this.eventHolder = $({});
        this.updateEventName = "update";
        this.init();
    }
    
    Gallery.prototype = {
        
        init : function () {
            this.buildGallery();
            this.initListeners();
        },
        
        buildGallery : function (items = this.items) {
            var template = '';
            if (items) {
                items.forEach( function(item, index){
                    var filmCard = `<div class='col-md-4 col-xs-6 text-center'>
                                        <h3>${item.Title}</h3>
                                        <div style="background: url(${item.Poster}) no-repeat; 
                                                    background-size: contain;
                                                    background-position: 50% 50%;
                                                    width: 100%;
                                                    height: 400px;
                                                    ">
                                        </div>
                                        <br />
                                        <div>Год выпуска: ${item.Year}</div>
                                    </div>`;
                    template += filmCard;
                });
            }
            this.DOMElements.contentDiv.innerHTML = template;
        },

        initListeners : function () {
            
            /*this.DOMElements.saveBtn.addEventListener("click", () => {
                let item = this.items[0];
                item.name = "New name";
                this.saveDefer.resolve(item);
            });
            
            this.DOMElements.refreshBtn.addEventListener("click", () => {
                this.eventHolder.trigger( this.updateEventName , [{counter: this.counter++}]);
            });*/
            
            this.DOMElements.input.addEventListener("keyup", (event) => {
                if (event.key === "Enter") {
                    this.eventHolder.trigger( this.updateEventName, [{value: event.target.value}]);
                }   
            });
        } 

    }
    
    window.app = window.app || {};
    window.app.Gallery = Gallery;
    
}());
