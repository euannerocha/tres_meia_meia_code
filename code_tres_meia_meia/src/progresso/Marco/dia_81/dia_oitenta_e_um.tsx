import React, { useState } from "react";

interface Notification {
  id: number;
  message: string;
}

const NotificationList: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = () => {
    const newNotification: Notification = {
      id: notifications.length + 1,
      message: `Notification ${notifications.length + 1}`,
    };
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div>
      <h2>Notification List</h2>
      <button onClick={addNotification}>Add Notification</button>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
