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

const genLoginPacket = token => {
    let packet = {
        header: {
            version: '1',
        },
        body: {
            packetType: 2,
            content: token,
        },
    };
    return JSON.stringify(packet);
};

const genInbox = (cvsId, msg, senderAvatarUrl) => {
    return {
        createTime: 1598873766000,
        cvsId: cvsId,
        id: 51,
        messageId: 22,
        msg: msg,
        readed: false,
        selfSend: true,
        senderAvatarUrl: senderAvatarUrl,
        senderId: 8,
        senderName: 'tom',
        syncId: 1,
    };
};

const formatDateOfHourAndMinute = timestap => {
    let date = new Date(timestap);
    return date.getHours() + ':' + date.getMinutes();
};

export default { sortCvs, genLoginPacket, formatDateOfHourAndMinute, genInbox };
