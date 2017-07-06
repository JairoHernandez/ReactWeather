function addPromise(a, b) {

    return new Promise(function(resolve, reject) {
        
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b); 
        } else {
            reject('a and b both need to be numbers.');
        }
    });
}

addPromise(2,'v').then(function(sum) {
    console.log('Success...Sum:', sum);
}, function(err) {
    console.log('Error:', err);
});





