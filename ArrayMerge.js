/**
 * Aurthor: Ntuthuko Mthiyane
 * Date: 30/01/2018
 * Description: This programs iterates through two arrays and merge objects that are the same
 * 
 */

function ArrayMerge(firstArray, secondArray){
    //will store the merged values
    let mergedArray = [];
    let currentObject;
    //iterate through the first array and check for things with the same id on the second list, if found merge
    for(let i=0; i<firstArray.length; i++){
        currentObject = firstArray[i];
        for(let j=0; j<secondArray.length; j++){
            if(currentObject._id === secondArray[j]._id){
                //merge the two objects if the id's are the same
                currentObject = Object.assign(currentObject, secondArray[j]);
            }
        }
        //once merged, than store to the final array
        mergedArray.push(currentObject);
    }
    return mergedArray;
}


//test data
let data1 =[
    {
        "_id": "abd123",
        "name": {
            "first": "Blackwell",
            "last": "Sawyer"
        },
        "company": "Rooforia"
    },
    {
        "_id": "123abc",
        "name":{
            "first": "letha",
            "last": "Dodson"
        },
        "company": "geeky"
    }
];

let data2 = [
    {
        "_id": "abd123",
        "phone": "+098134 5346",
        "address": "forst hill, cape town"
    },
    {
        "_id": "123abc",
        "phone": "+25436 75684",
        "address": "27 claremont road",

    }
]
console.log(ArrayMerge(data1,data2));