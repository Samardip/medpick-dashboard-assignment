import React from 'react'

export const Sidebar = () => {
    let sidebarActions = [
        {
            icon: 'graph.png',
            actionName: 'Home',
        },
        {
            icon: 'group.png',
            actionName: 'Leaderboard',
        },
        {
            icon: 'shoppingCart.png',
            actionName: 'Order',
        },
        {
            icon: 'shoppingBag.png',
            actionName: 'Product',
        },
        {
            icon: 'chartLine.png',
            actionName: 'Sales Report',
        },
        {
            icon: 'message.png',
            actionName: 'Messages',
        },
        {
            icon: 'setting.png',
            actionName: 'Settings',
        },
        {
            icon: 'signOut.png',
            actionName: 'Sign Out',
        },

    ]
    return (
        <><div className="flex gap-2 justify-center">
            <div><img src="../assests/logo.png" alt="logo" className="w-[40px] h-[60px]" /></div>
            <div className="text-[20px] font-semibold">Kaveri Hospital</div>
        </div>
            {
                sidebarActions?.map((item) => {
                    return <div className={`flex gap-2 justify-start p-3 my-4 ${item.actionName === 'Home' ? 'bg-custom-orange text-white rounded-[8px]' : 'text-gray-400'}`}>
                        <div><img src={`../assests/${item.icon}`} alt={item.icon} className="w-[20px] h-[20px]" /></div>
                        <div className="text-[15px] font-semibold">{item.actionName}</div>
                    </div>
                })
            }</>
    )
}
