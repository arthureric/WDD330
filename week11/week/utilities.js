function getJSON(url){
    fetch(url).then((response) => {
        console.log('resolved', response);
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch((err) => {
        console.log('rejected', err);
    });
}