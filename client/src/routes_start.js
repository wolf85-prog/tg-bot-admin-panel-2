import React from 'react'
import { 
    ADMIN_ROUTE, 
    NOTIF_ROUTE,
    MESS_BOT_ROUTE,
    REPORTS_ROUTE,
    DISTRIBUTION_ROUTE,
    DISTRIBUTIONADD_ROUTE,
    SETTINGS_ROUTE,
    CHAT_ROUTE,
    CHAT_ROUTE2,
    CHAT_ROUTE3,
    CHAT_WORKER,
    WORKERS_ROUTE,
    DISTRIBUTIONW_ROUTE,
    DISTRIBUTIONADDW_ROUTE,
    DISTRIBUTIONWPLANER_ROUTE,
} from "./utils/consts";

const Chats = React.lazy(() => import('./pages/Chats'))
const Chats2 = React.lazy(() => import('./pages/Chats2'))
const Chats3 = React.lazy(() => import('./pages/Chats3'))
const ChatWorker = React.lazy(() => import('./pages/ChatWorker'))
const Admin = React.lazy(() => import('./pages/Admin'))
const Notifications = React.lazy(() => import('./pages/Notifications'))
const MessagesBot = React.lazy(() => import('./pages/MessagesBot'))
const Reports = React.lazy(() => import('./pages/Reports'))
const Distribution = React.lazy(() => import('./pages/Distribution'))
const DistributionAdd = React.lazy(() => import('./pages/DistributionAdd'))
const Settings = React.lazy(() => import('./pages/Settings'))
const Workers = React.lazy(() => import('./pages/Workers'))
const DistributionW = React.lazy(() => import('./pages/DistributionW'))
const DistributionAddW = React.lazy(() => import('./pages/DistributionAddW'))
const DistributionWPlaner = React.lazy(() => import('./pages/DistributionWPlaner'))

export const authRoutes = [
    { path: ADMIN_ROUTE, name: 'Панель управления', Component: Admin },
    { path: CHAT_ROUTE, name: 'Чаты', Component: Chats },
    { path: CHAT_ROUTE2, name: 'Заказчики', Component: Chats2 },
    { path: CHAT_ROUTE3, name: 'Проекты', Component: Chats3 },
    { path: CHAT_WORKER, name: 'Workhub', Component: ChatWorker },
    { path: DISTRIBUTION_ROUTE, name: 'Рассылки', Component: Distribution },
    { path: DISTRIBUTIONADD_ROUTE, name: 'Создание рассылки', Component: DistributionAdd },
    { path: REPORTS_ROUTE, name: 'Отчеты', Component: Reports },
    { path: MESS_BOT_ROUTE, name: 'Сообщения от бота', Component: MessagesBot },
    { path: NOTIF_ROUTE, name: 'Уведомления', Component: Notifications },
    { path: SETTINGS_ROUTE, name: 'Настройки', Component: Settings },
    { path: WORKERS_ROUTE, name: 'Специалисты', Component: Workers },
    { path: DISTRIBUTIONW_ROUTE, name: 'Рассылки', Component: DistributionW },
    { path: DISTRIBUTIONADDW_ROUTE, name: 'Создание рассылки', Component: DistributionAddW },
    { path: DISTRIBUTIONWPLANER_ROUTE, name: 'Рассылки', Component: DistributionWPlaner },
    { path: '/', name: 'Панель управления', Component: Admin },
]
