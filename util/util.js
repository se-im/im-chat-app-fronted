const sortCvs = cvsList => {
    return cvsList.sort(compare('lastMessageTime'));
};

function compare(property) {
    return function(obj1, obj2) {
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 - value2; // 升序
    };
}

export default { sortCvs };
