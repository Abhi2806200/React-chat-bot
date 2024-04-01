import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit';
import Avatar from './components/Avatar';
import data from './data';
import StartBtn from './components/StartBtn';
import StartSlow from './components/StartSlow';
import DisplayImage from './components/DisplayImage';
const Config = {
    botName : "Abhishek Bot",
    initialMessages : [createChatBotMessage(`Welcome to RideAge Advisor!`, {
        widget: "startBtn"
    })],
    customComponents : {
        botAvatar : (props) => <Avatar {...props} />,
    },
    state : {
        checker : null,
        data,
        userData: {
            name: "",
            age: 0,
            category: "",
            product: {
                name: "",
                link: "",
                imageUrl: ""
            }
        }
    },
    widgets: [
        {
            widgetName: "startBtn",
            widgetFunc: (props) => <StartBtn {...props} />,
        },
        {
            widgetName: "startSlow",
            widgetFunc: (props) => <StartSlow {...props} />,
        },
        {
            widgetName: "finalImage",
            widgetFunc: (props) => <DisplayImage {...props} />,
        },
    ]
  
}

export default Config