const sortCvs = cvsList => {
    return cvsList.sort(sortTwoCate);
};

function compare(obj1, obj2, property) {
    var value1 = obj1[property];
    var value2 = obj2[property];
    return value2 - value1; // 降序
}

var sortTwoCate = function(a, b) {
    let prop1 = 'unreadMessageNum';
    let prop2 = 'lastMessageTime';
    if (a[prop1] !== 0) {
        if (b[prop1] !== 0) {
            return compare(a, b, prop2);
        } else {
            return -1;
        }
    } else {
        if (b[prop1] === 0) {
            return compare(a, b, prop2);
        } else {
            return 1;
        }
    }
};
export default { sortCvs };
