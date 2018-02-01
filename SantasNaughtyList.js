/**
 * Arthor: Ntuthuko Mthiyane,
 * Date: 29/01/18
 * 
 * This programme is to check intersection of two arrays and produce a list with the intersecting
 * values and remove any duplicates, link for the problem: 
 * https://kurtosys-prod-eng.atlassian.net/wiki/spaces/GRAD/pages/223871621/Challenge+1+-+Santa+s+Naughty+List
 * @param {*} santasList 
 * @param {*} children 
 */

function findChildren(santasList, children) {
    //contains all the children who appear on santas list
   let childrenOnSantasList = [];
   for(let i=0; i<children.length; i++){
        //if child exist on santas list and not on the new list, than addd to the new list. else do nothing/skip
        if((childrenOnSantasList.indexOf(children[i])===-1) && (santasList.indexOf(children[i])!==-1)){
            childrenOnSantasList.push(children[i]);
        }
    }
    //return a sorted version of the list
    return (childrenOnSantasList.sort());

}

console.log(findChildren(["Tom","Errol","Sam", "mistyMay","Peter","Jennifer", "macMerphy"],["Errol", "Peter", "jennifer", "mistymay", "MacMerphy"]));