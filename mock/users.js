export default {
    '/api/users': [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ],
    '/api/conversations': [
        {
            avatarUrl:
                'https://avatars0.githubusercontent.com/u/1303154?s=400&u=54321ff7122d88f348e613ff6364c489c0c31646&v=4',
            cvsName: 'Joe Black',
            lastMessage: '莫听穿林打叶声',
            lastMessageTime: '22:31',
            unreadMessageNum: '2',
        },
        {
            avatarUrl:
                'https://avatars2.githubusercontent.com/u/507615?s=400&u=63a8ef8e8876c4c1fad07a7737684f5281fedaaa&v=4',
            cvsName: 'John Brown',
            lastMessage: '何妨吟啸且徐行',
            lastMessageTime: '22:31',
            unreadMessageNum: '2',
        },
        {
            avatarUrl:
                'https://avatars1.githubusercontent.com/u/30034514?s=400&u=28654b80d6514965737b6a88c2b1857c130060e0&v=4',
            cvsName: 'Jim Green',
            lastMessage: '竹杖芒鞋轻胜马',
            lastMessageTime: '22:31',
            unreadMessageNum: '2',
        },
        {
            title: 'Ant Design Title 1',
            avatarUrl:
                'https://avatars0.githubusercontent.com/u/5526096?s=400&u=0d0a37053b5c609dc08257d0f8e33d1ff916cdcd&v=4',
            cvsName: 'Jim Green',
            lastMessage: '谁怕',
            lastMessageTime: '22:31',
            unreadMessageNum: '2',
        },
        {
            avatarUrl:
                'https://avatars0.githubusercontent.com/u/7636918?s=400&u=1c72c9f0a3ba63aab7cdae9d33459113b7f364fa&v=4',
            cvsName: 'Joe Black',
            lastMessage: '一蓑烟雨任平生',
            lastMessageTime: '22:31',
            unreadMessageNum: '2',
        },
        {
            avatarUrl:
                'https://avatars1.githubusercontent.com/u/4705237?s=400&u=54fde6997b18476154c6a4da3c9a287abc78770e&v=4',
            cvsName: 'Joe Black',
            lastMessage:
                '在执行之前设计的一套详细的测试方案，包括测试的环境、步骤、数据和预期结果，目的：设计最少的有效测试用例集',
            lastMessageTime: '22:31',
            unreadMessageNum: '2',
        },
    ],
    '/api/message': {
        userPhoto:
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3107068196,1940194195&fm=26&gp=0.jpg',
        userName: 'User Name',
        userState: 'online',
        receiveMessage: [
            'receive message 1',
            'receive message 2',
            'receive message 3',
        ],
        sendMessage: ['send message 1', 'send message 2', 'send message 3'],
        inputMessage: '',
    },
};
