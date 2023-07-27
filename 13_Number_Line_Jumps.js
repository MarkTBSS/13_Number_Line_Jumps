function kangaroo(x1, v1, x2, v2) {
    var result = 'NO'
    if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
        result = 'NO'
    } else {
        var firstKangarooPosition = x1 
        var secondKangarooPosition = x2 
        if (firstKangarooPosition > secondKangarooPosition) {
            for (var i = 0; i < 10000; i++) {
                firstKangarooPosition += v1 
                console.log("Round" + i + ": " + firstKangarooPosition)
                secondKangarooPosition += v2 
                console.log("Round" + i + ": " + secondKangarooPosition)
                if (firstKangarooPosition == secondKangarooPosition) {
                    result = 'YES'
                    break;
                } else if (firstKangarooPosition < secondKangarooPosition) {
                    result = 'NO'
                    break;
                }
            }
        } else {
            for (var i = 0; i < 10000; i++) {
                firstKangarooPosition += v1 
                console.log("Round" + i + ": " + firstKangarooPosition)
                secondKangarooPosition += v2 
                console.log("Round" + i + ": " + secondKangarooPosition)
                if (firstKangarooPosition == secondKangarooPosition) {
                    result = 'YES'
                    break;
                } else if (firstKangarooPosition > secondKangarooPosition) {
                    result = 'NO'
                    break;
                }
            }
        }
        
    }
    return result
}

var x1 = 21
var v1 = 6 
var x2 = 47 
var v2 = 3
console.log(kangaroo(x1, v1, x2, v2))