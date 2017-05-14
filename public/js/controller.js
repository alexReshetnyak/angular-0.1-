(function(){
    
	var model = window.app.model;
    var Gallery = window.app.Gallery;
    var gallery = null;
            
    /*function bindSave() {
        gallery.saveDefer.then((item) => {
            model.saveData(item);    
        });
    }*/
    
    function bindUpdate() {
        gallery.eventHolder.on( gallery.updateEventName, (event, dataEvent) => {
            model.getData(dataEvent.value).then((data) => {
                if (data.Error) {
                    console.log('Ошибка: ' + data.Error);
                    return;
                }
                var sortData = model.getSortData(data);
                gallery.buildGallery(sortData);
            });  
        });
    }
    
    function bindEvents(){
        //bindSave();  
        bindUpdate();
    }
    
    function initGallery(data){
        gallery = new Gallery(data);   
    }
    
    function init() {
        
        model.getData().then((data) => {
            if (data.Error) {
                console.log('Ошибка: ' + data.Error);
                return;
            }
            var sortData = model.getSortData(data);
            initGallery(sortData);
            bindEvents();
        });    
    }
    init();
    
}())
