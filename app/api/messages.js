import client from './client';

const sendMessage = (messageObject) => client.post('/messages', messageObject)

export default {
    sendMessage,
}