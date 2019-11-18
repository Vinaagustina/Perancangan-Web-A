var doc = 'list-menu2.json' + page + '.json';

fetch(doc,{})
    .then(function(response){
        console.log('response',response);
        return response.text();
    })

    .then(function(response){
        console.log('response',response);
        var items = JSON.parse(response);
        console.log('items',items);

        for(var i=0,i2=items.length; i < i2; i++) {

        }
    })
    .catch(function(reason){
        console.log('exception',reason);

    });
    