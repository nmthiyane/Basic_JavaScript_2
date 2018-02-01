/**
 * Aurthor: Ntuthuko Mthiyane
 * Date: 30/01/2018
 * Description: This program calculates the latency time when sending a request to the given url and the average time
 * 
 * @param {*} stringToCompress 
*/

var fetch = require('node-fetch');
function QuickAndDirty(url, numRequests){
    let totalLatency = 0;
    let eachLatency;
    let startTime;
    for(let i=0; i<numRequests; i++){
        startTime = (new Date()).getTime();
        fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            eachLatency = data.milliseconds_since_epoch - startTime;
            totalLatency += eachLatency;
            console.log(`Latency for request #${i+1}: ${eachLatency} milliseconds`);
        })
        .catch(function() {
            // This is where you run code if the server returns any errors
            console.log("Encounted an unknown error.")
        });
    }
    console.log(`Average time for all requests is ${totalLatency/numRequests} milliseconds.`)
    

 }

 QuickAndDirty("http://date.jsontest.com/",6);