/**
 * Aurthor: Ntuthuko Mthiyane
 * Date: 30/01/2018
 * Description: This program compresses a given string and also decompresses
 * 
 * @param {*} stringToCompress 
 */

function CompressString(stringToCompress){
    let count=0;
    let lastAccumulatorValue;
    let total=0;   //will keep track how many items we've encounted and will use to break

    let compression = function(accumulator, currentValue){
        //slice the string to get the character in last postion, will use this to see if same as current value
        if(count>0){
            lastAccumulatorValue = accumulator.slice(accumulator.length-1,accumulator.length);
        }
        else{
            lastAccumulatorValue = accumulator;
        }
        //if the last value of the accumulator is the same as the current value, increase the number the value occurs
        if(lastAccumulatorValue===currentValue){
            count++;
        }
        //if the last accumultor value is differnt to current, than addd count and current to accumulator.
        else if(lastAccumulatorValue !==currentValue && count>0)  {
            accumulator+=count;
            accumulator+=currentValue;
            count=1;
        }
        //to add count to the last value
        if(stringToCompress.length == (total+1)){
            accumulator+=count;
        }
        total++;
        return accumulator
    }

    let stringToList = stringToCompress.split("");
    return stringToList.reduce(compression, stringToList[0]);
}

function DecompressString(stringToDecompress){
    let count = 1;
    let decompression = function(accumulator, currentValue){
       //if this is the first element, 
        if(count==2){
            accumulator+= (accumulator.slice(accumulator.length-1,accumulator.length)).repeat(currentValue-2);
        }
        //if the position is divisible by 2, than this is a number to multiply with
        else if(count%2==0){
            accumulator+= (accumulator.slice(accumulator.length-1,accumulator.length)).repeat(currentValue-1);
        }
        else{
            accumulator+=currentValue;
        }
        count++;
        return accumulator;
    }
    let stringToList = stringToDecompress.split("");
    return stringToList.reduce(decompression, stringToList[0]);
}
console.log(CompressString("xxxxxxxxxxxxxxxxxxxxxyzzzx"));