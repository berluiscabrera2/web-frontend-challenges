import React from 'react'

import './NotificationCards.css'

function NotificationCards({notificationList, setNotificationList, setCounter}) {

    const handleClick = ( e, index ) => {
        e.preventDefault();
        let copyNotificationList =  notificationList.map( (data, i) => {
            if(i === index){
                if(data['notification_checked'] === false) setCounter(prevState => prevState - 1);
                data = {...data, "notification_checked": true};
            };
            return data;
        });

        setNotificationList(copyNotificationList);
    }


  return (
    <div className='notificationcards'>
        {
            notificationList && notificationList.map( (data, index) => {
                return(
                    <div key={index} className='notificationcards__list' style={{backgroundColor: data.notification_checked ? 'white' : 'hsl(211, 68%, 94%)'}} onClick = {(event) => handleClick( event, index )}>
                       {data.profileimg && <img src={data.profileimg}/>}
                        <div className='notificationcards__listinfo'>
                            <p><b>{data.firstname} {data.lastname} </b>{data.action} {data.post && <span>{data.post}</span>} {data.group && <span id='group'>{data.group}</span>} {!data.notification_checked && <span id='dot'></span>}</p>
                            {data.time && <p id='time'>{data.time}</p>}
                            {data.message && <p id='message'>{data.message}</p>}
                        </div>
                        {data.pic && <img className='imgChess' src={data.pic}/>}
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default NotificationCards
