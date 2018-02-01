/**
 *  * Aurthor: Ntuthuko Mthiyane
 * Date: 30/01/2018
 * Description: This program uses recursion to add the values of total found on the program
 * @param {*} total 
 * @param {*} data 
 */

function Question3(){
    var data = [
        {
            total: 10,
            moreData: {
                total: 10
            }
        },
        {
            total: 10,
            moreData: {
                total: 10,
                moreData: {
                    total: 10
                }
            }
        },
        {
            total: 10
        }
    ];

    function Recursion(total, data){
        //first iterate through the array
        for(let object in data){
            try{
                //get the total value at the current object. 
                total += object.total;
            }
            finally{
                 //if anothef object is encounted while iterating, call the function recursively
                if(typeof data[object]== "object"){
                    Recursion(total, data[object]);
                }
            }
        }
        return total;
    }    
    console.log(Recursion(0,data));
}
Question3();

