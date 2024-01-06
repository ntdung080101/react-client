import { Box } from "@chakra-ui/react";
import './chatbot.css';
import { useEffect, useState } from "react";
import axios from "axios";

const ChatBox = () => {
    const [data, setData] = useState('');
    const [isHide,setIshide] = useState(false);
    const [listData, setListData] = useState([{'message':'Xin Chào bạn!', "isMe":false}])

    const hide = () => {
        setIshide(!isHide)
    }

    const send = () => {

        if(data===""){
            alert("nhập tin nhắn!");
            return
        }

        axios.post('http://127.0.0.1:5005/webhooks/rest/webhook',
            {
                sender: 'sender',
                message: data,
            },{
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const tempList = listData;

                tempList.push({message: data, isMe: true})
                tempList.push({message: response.data[0].text, isMe: false})

                setListData(tempList);

                setData('')
            }).catch(error=>{
                console.log(error)
            });
    }

    const ListDataComponent = () => {
        return listData.map((message,key)=> {
            return message.isMe ? <li  key={`data_${key}`} className="me">{message.message}</li> : <li key={`data_${key}`} >{message.message}</li>;
        })
    }

    return <Box className="fixed-footer" id="fixedFooter">
        <div className="chat">
            <div className="body" style={{visibility: isHide? 'hidden':'visible'}}>
                <div className="top">
                    <div style={{padding: '5px', color:'green'}}>
                        <p>TƯ VẤN CHATBOT</p>
                    </div>
                    <div>
                        <button>...</button>
                        <button onClick={hide}> - </button>
                    </div>
                </div>

                <ul>
                    <ListDataComponent />
                </ul>

                <div className="bottom">
                    <input type="text" placeholder="chat...." value={data} onChange={e=>setData(e.target.value)} style={{width: '90%',border: 'none', outline: 'none'}}/>
                    <button onClick={send}></button>
                </div>
            </div>

            <button onClick={hide}></button>   
        </div> 
    </Box>
};

export default ChatBox;