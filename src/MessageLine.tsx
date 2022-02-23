import React, { useEffect } from "react";
import { pusher } from './App'

interface MessageProps {
    hello: string;
}

function MessageLine({ hello }: MessageProps) {
    const [text, setText] = React.useState('Incoming Channels nessages will appear here');

    useEffect(() => {

        if (pusher) {

            const channel = pusher.subscribe('my-channel');
            channel.bind('my-event', (data: any) => {
                setText(data);
            });

            return () => {
                channel.unbind_all()
                pusher?.unsubscribe("public-chat")
            }
        }
    }, [])

    return (
        <div>
            <h1> Hello, {hello}</h1>
            <h2>{text}</h2>
        </div>
    );
}

export default MessageLine