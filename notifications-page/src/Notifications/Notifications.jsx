import React from 'react'
import { useState } from 'react'
import NotificationCards from '../NotificationCards/NotificationCards'
import NotiData from '../Data/data.json'

import './Notifications.css'

function Notifications() {
  const [notificationList, setNotificationList] = useState([...NotiData]);
  const [counter, setCounter] = useState(3);

  const handleMarkAllNotificationsClick = () => {
    const markAll = notificationList.map( data => {
      data = {...data, "notification_checked":true}; 
      return data;
    })
    setNotificationList(markAll);
    setCounter(0);
  }



  return (
    <div className='notifications'>
      <div className='notifications__header'>
        <div className='notifications__headerLeft'>
          <h1>Notifications</h1>
          {counter > 0 ? <h2>{counter}</h2> : null}
        </div>
        <div className='notifications__headerRight'>
          <button onClick={handleMarkAllNotificationsClick}>Mark all as read</button>
        </div>
      </div>
      <NotificationCards 
        notificationList={notificationList}
        setNotificationList={setNotificationList}
        counter={counter}
        setCounter={setCounter}

         />
    </div>
  )
}

export default Notifications