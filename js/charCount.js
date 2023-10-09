exports.charCount = function(str) {
    let strToSort = str.slice(0);
    let regex = /[a-zA-Z]/g;
    strToSort = strToSort.toLowerCase().match(regex);

    let charAndNumObj = {};
    let containerArr = [];

    for (let char of strToSort){
        if (charAndNumObj[char]){
            charAndNumObj[char]++
        } else {
            charAndNumObj[char] = 1;
        }
    }

    for (let key in charAndNumObj){
        containerArr.push([key, charAndNumObj[key]])
    }
    
    containerArr.sort(customSort)
    
    return containerArr;
};

const customSort = (a, b) => {
    if (a[1] > b[1]) {
        return - 1;
    } else if (a[1] < b[1]) {
        return 1;
    }
    if (a[0] > b[0]) {
        return 1;
    } else if (a[0] < b[0]) {
        return -1;
    }
}
