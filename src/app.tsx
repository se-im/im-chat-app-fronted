import { message } from 'antd';
export const dva = {
    config: {
        onError(e: Error) {
            console.log('----------');
            message.error(e.message, 3);
        },
    },
};
