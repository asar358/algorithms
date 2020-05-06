//Constant time: O(1)

function arrayIndex(index){
    console.log(index[1])
}
//Linear time: O(n)
function logItems(n){
    for(var i = 0; i < n.length; i++) {
        console.log(n[i])
    }
}


//Polynomial time: O(n^k)

function multipleLoops(n){
    for (let i = 0; i < n; i++){
        for(let i = 0; i < n; i++){
            for (let i = 0; i < n; i++){
                
            }
        }
    }
}