import ChatBox from 'react-custom-chat';
import store from '../store/store';
import { useState } from '@hookstate/core';

const FirstPerson = () => {
    const { firstPersonMessageList, secondPersonMessageList } = useState(store);

    const handleSendMessage = newMessage => {
        firstPersonMessageList.merge([{ text: newMessage, person: 'primary' }]);

        setTimeout(() => {
            secondPersonMessageList.merge([{ text: newMessage, person: 'secondary' }])
        }, 500);
    }

    return (
        <ChatBox
            messageList={firstPersonMessageList.get()}
            onSendMessage={handleSendMessage} // do something with newMessage
            settings={{
                position: 'left',
                navColor: 'green',
                navText: 'Mycroft'
            }}
        />
    )
}

export default FirstPerson;