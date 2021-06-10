import ChatBox from 'react-custom-chat';
import store from '../store/store';
import { useState } from '@hookstate/core';

const SecondPerson = () => {
    const { firstPersonMessageList, secondPersonMessageList } = useState(store);

    const handleSendMessage = newMessage => {
        setTimeout(() => {
            firstPersonMessageList.merge([{ text: newMessage, person: 'secondary' }]);
        }, 500);

        secondPersonMessageList.merge([{ text: newMessage, person: 'primary' }])
    }

    return (
        <ChatBox
            messageList={secondPersonMessageList.get()}
            onSendMessage={handleSendMessage} // do something with newMessage
            settings={{
                position: 'right',
                navColor: 'blue',
                navText: 'Cortana'
            }}
        />
    )
}

export default SecondPerson;