import React, { useEffect, useState, useRef } from 'react';
import searchIcon from 'assets/icons/search.svg';

import friendRequestIcon from 'assets/icons/friend-request.svg';
import noficationIcon from 'assets/icons/nofication.svg';
import messageIcon from 'assets/icons/message.svg';
import viewCartIcon from 'assets/icons/veiw-cart.svg';

import me from './temp_api/me';

const api = {
  friendRquests: [],
  nofications: [],
  unreadMessages: [],
};

interface Props {
  comp?: React.ReactNode;
}

type MenuItem = {
  name: string;
  text: string;
  icon: any;
  details: string | any[];
  buttonText: string;
};

const TopLayout = (props: Props) => {
  const items: MenuItem[] = [
    {
      name: 'friend-request',
      text: 'Friends request',
      icon: friendRequestIcon,
      details: api.friendRquests.length == 0 ? 'No friend request.' : api.friendRquests,
      buttonText: 'All requests',
    },
    {
      name: 'notification',
      text: 'Notifications',
      icon: noficationIcon,
      details: api.nofications.length == 0 ? 'No notifications found.' : api.nofications,
      buttonText: 'All notifications',
    },
    {
      name: 'unread-message',
      text: 'Unread messages',
      icon: messageIcon,
      details: api.unreadMessages.length == 0 ? 'No messages to read.' : api.unreadMessages,
      buttonText: 'All unread messages',
    },
  ];

  const dropdownMenu = [
    { text: 'Timeline', linkTo: '' },
    { text: 'Profile', linkTo: '' },
    { text: 'Friends', linkTo: '' },
    { text: 'Groups', linkTo: '' },
    { text: 'Adverts', linkTo: '' },
    { text: 'Forums', linkTo: '' },
    { text: 'Shop', linkTo: '' },
    { text: 'Notifications', linkTo: '' },
    { text: 'Messages', linkTo: '' },
    { text: 'Settings', linkTo: '' },
    { text: 'Logout', linkTo: '' },
  ];

  const [searchText, setSearchText] = useState('');
  const [activeItem, setActiveItem] = useState<any>(undefined);
  const [width, setWidth] = useState<any>(window.innerWidth / 4);
  const ref = useRef<HTMLDivElement>(null);

  const widthChange = () => {
    setWidth(ref.current?.offsetWidth);
  };

  // resize member's layout
  useEffect(() => {
    window.addEventListener('resize', widthChange);
    return () => window.addEventListener('resize', widthChange);
  }, [ref]);

  // setActiveItem == undifined when click outside of items
  window.onclick = function (event: MouseEvent) {
    const modals: any[] = [];

    // click outside dropdown menu
    const dropdownMenuModals = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropdownMenuModals.length; i++) {
      modals.push(dropdownMenuModals[i]);
    }

    // click outside items
    items.forEach((item) => {
      modals.push(document.getElementById(item.name));
      const childEls = document.getElementById(item.name)?.querySelectorAll('div, img');
      if (childEls) {
        for (let i = 0; i < childEls.length; i++) {
          modals.push(childEls[i]);
        }
      }
    });
    const isOutside = modals.every((modal) => modal != event.target);

    if (isOutside) {
      setActiveItem(undefined);
    }
  };
  console.log(activeItem);

  return (
    <>
      <div className="w-1/5"></div>
      <div className="w-4/5">
        <div className="flex flex-col h-20 fixed w-4/5 bg-white shadow z-40">
          <div className="flex justify-between h-max my-auto ml-9 mr-24">
            <div className="flex w-1/3">
              <img src={searchIcon} alt="search" className="my-auto w-3 mx-2" />
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.currentTarget.value)}
                type="text"
                placeholder="Search..."
                name="search"
                className="h-7 w-full outline-none my-auto"
              />
            </div>
            <div className="flex mr-4">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="relative bg-gray-100 rounded-full mx-2 cursor-pointer"
                  onClick={(e) => setActiveItem(e.currentTarget.id)}
                  id={item.name}
                >
                  <img src={item.icon} alt="icon" className="w-3 h-3 m-2" />
                  {item.name == activeItem ? (
                    <div className="absolute rounded-lg top-14 left-1/2 transform -translate-x-1/2 bg-white shadow-lg w-64 h-max cursor-auto">
                      <div className="flex flex-col my-3 divide-y divide-gray-200">
                        <div className="px-5 mb-2 w-full font-medium">{item.text}</div>
                        <div className="px-5 mb-2 w-full">
                          <div className="mt-2">
                            {typeof item.details != 'string' ? (
                              item.details.map((detail, i) => <div key={i}>{detail}</div>)
                            ) : (
                              <div className="bg-yellow-100 rounded px-5 text-yellow-700 py-4">{item.details}</div>
                            )}
                          </div>
                        </div>
                        <div className="flex w-full">
                          <div className="mx-5 w-full">
                            <button className="w-full mx-auto mt-2 py-1 rounded-full border focus:outline-none text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700">
                              {item.buttonText}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
              <a href="/cart" className="bg-gray-100 rounded-full mx-2 cursor-pointer">
                <img src={viewCartIcon} alt="icon" className="w-3 h-3 m-2" />
              </a>
              <div
                id="dropdown-menu"
                onClick={() => setActiveItem('dropdown-menu')}
                className="dropdown-menu relative flex mx-3 cursor-pointer"
              >
                <img
                  src={me.avatar}
                  alt="avatar"
                  className="dropdown-menu w-7 h-7 my-auto mr-1 transform hover:scale-110 duration-300"
                />
                <div className="dropdown-menu my-auto hover:text-purple-700">{me.email}</div>
                {activeItem == 'dropdown-menu' ? (
                  <div className="absolute flex flex-col top-14 -left-20 w-36 shadow-lg rounded-xl divide-y divide-gray-200">
                    {dropdownMenu.map((item, i) => (
                      <a className="w-full px-6 py-2 text-gray-500 hover:text-purple-700" key={i} href={item.linkTo}>
                        {item.text}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start mt-20">
          <div style={{ marginRight: `${width + 6 * 16}px` }}>{props.comp}</div>
          <div ref={ref} className="fixed w-1/4 right-24 shadow h-screen">
            member layout
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLayout;
