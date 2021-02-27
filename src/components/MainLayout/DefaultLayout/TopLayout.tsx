import React, { useEffect, useState, useRef } from 'react';
import searchIcon from 'assets/icons/search.svg';
import friendRequestIcon from 'assets/icons/friend-request.svg';
import noficationIcon from 'assets/icons/nofication.svg';
import messageIcon from 'assets/icons/message.svg';

import viewCartIcon from 'assets/icons/veiw-cart.svg';

import RightSider from '../RightSider';
import DropdownMenu from '../DropdownMenu';
import Notification from '../Notification';

const tempApi = {
  friendRquests: [],
  nofications: [],
  unreadMessages: [],
};

interface Props {
  comp?: React.ReactNode;
  isXlScreen: boolean;
  isLgScreen: boolean;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  user: any;
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
      details: tempApi.friendRquests.length == 0 ? 'No friend request.' : tempApi.friendRquests,
      buttonText: 'All requests',
    },
    {
      name: 'notification',
      text: 'Notifications',
      icon: noficationIcon,
      details: tempApi.nofications.length == 0 ? 'No notifications found.' : tempApi.nofications,
      buttonText: 'All notifications',
    },
    {
      name: 'unread-message',
      text: 'Unread messages',
      icon: messageIcon,
      details: tempApi.unreadMessages.length == 0 ? 'No messages to read.' : tempApi.unreadMessages,
      buttonText: 'All unread messages',
    },
  ];

  const [activeItem, setActiveItem] = useState<any>(undefined);
  const [width, setWidth] = useState<any>(window.innerWidth / 4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef<HTMLDivElement>(null);

  const widthChange = () => {
    setWidth(ref.current?.offsetWidth);
    setWindowWidth(window.innerWidth);
  };

  // resize member's layout
  useEffect(() => {
    window.addEventListener('resize', widthChange);
    return () => window.removeEventListener('resize', widthChange);
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

  return (
    <>
      <div className="xl:w-1/5 w-20 h-1"></div>
      <div style={{ width: !props.isXlScreen ? windowWidth - 5 * 16 : '80%' }}>
        <div className="flex flex-col h-20 fixed xl:w-4/5 xl-max:left-20 xl-max:right-0 bg-white shadow z-40">
          <div className="flex justify-between h-max my-auto ml-9 mr-24">
            <div className="flex w-1/3">
              <img src={searchIcon} alt="search" className="my-auto w-3 mx-2" />
              <input
                value={props.searchText}
                onChange={(e) => props.setSearchText(e.currentTarget.value)}
                type="text"
                placeholder="Search..."
                name="search"
                className="h-7 w-full outline-none my-auto"
              />
            </div>
            <div className="flex mr-4">
              {items.map((item, i) => (
                <Notification key={i} item={item} activeItem={activeItem} setActiveItem={setActiveItem} />
              ))}
              <a href="/cart" className="bg-gray-100 rounded-full mx-2 cursor-pointer">
                <img src={viewCartIcon} alt="icon" className="w-3 h-3 m-2" />
              </a>
              <div
                id="dropdown-menu"
                onClick={() => setActiveItem(activeItem != 'dropdown-menu' && 'dropdown-menu')}
                className={`dropdown-menu relative flex mx-3 cursor-pointer`}
              >
                <img
                  src={props.user?.avatar}
                  alt="avatar"
                  className={`dropdown-menu w-7 h-7 my-auto mr-1 rounded-full transform hover:scale-110 duration-300`}
                />
                {props.isLgScreen && (
                  <div className={`dropdown-menu my-auto hover:text-purple-700`}>{props.user?.email}</div>
                )}
                {activeItem == 'dropdown-menu' ? <DropdownMenu isLgScreen={props.isLgScreen} /> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-20">
          <div style={{ marginRight: `${(props.isLgScreen ? width : 0) + 6 * 16}px` }}>{props.comp}</div>
          <div ref={ref} className={`${props.isLgScreen ? 'fixed w-1/4 right-24 h-screen' : ''} shadow`}>
            <RightSider />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopLayout;
