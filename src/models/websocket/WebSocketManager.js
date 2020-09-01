import { server } from '../../../util/api';
import util from '../../../util/util';

let ws;
let status = 'close';

let serverIp = server.substring(7);

let token = '';

function setToken(token1) {
    token = token1;
    start();
}

let dispatch;

function setDispatch(dispatch1) {
    dispatch = dispatch1;
}

function start() {
    if (status === 'open' || token === undefined || token === '') {
        return;
    }
    ws = new WebSocket(`ws://${serverIp}:8888/ws`);
    status = 'open';
    console.log('websocket打开成功');
    ws.onopen = function() {
        ws.send(util.genLoginPacket(token));
    };

    ws.onmessage = function(evt) {
        var received_msg = evt.data;
        let packet = JSON.parse(received_msg);
        dispatch(packet.body);
    };

    ws.onclose = function() {
        console.log('关闭websocket');
        status = 'close';
    };
}

function stop() {
    if (status === 'open') {
        ws.close();
        status = 'close';
    }
}

export default { start, stop, setToken, setDispatch };
