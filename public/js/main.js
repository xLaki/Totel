const VayItems = document.getElementsByTagName('li');

for (let i = 0; i < VayItems.length; i++) {
    const element = VayItems[i];

    element.addEventListener('click', function(){
        console.log(element.id);
        fetch('/home/' + element.id, { method: "delete" } )
        .then( (res) => res.json() )
        .then( (data) =>  location.reload() )
    }) 
}
