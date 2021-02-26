import React, { useState, useRef, useEffect } from 'react';
import LeftLayout from '../LeftLayout';
import DropdownMenu from '../DropdownMenu';
import RightSider from '../RightSider';
import Notification from '../Notification';
import searchIcon from 'assets/icons/search-white.svg';
import MessageIcon from 'assets/icons/message-white.svg';

import friendRequestIcon from 'assets/icons/friend-request.svg';
import noficationIcon from 'assets/icons/nofication.svg';
import messageIcon from 'assets/icons/message.svg';
import viewCartIcon from 'assets/icons/veiw-cart.svg';

import SmallChatLayout from './SmallChatLayout';

const api = {
  friendRquests: [],
  nofications: [],
  unreadMessages: [],
};

interface Props {
  isMobile: boolean;
  comp: React.ReactNode;
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  friendGroupToggle: string;
  setFriendGroupToggle: React.Dispatch<React.SetStateAction<string>>;
  searchFriend: string;
  setSearchFriend: React.Dispatch<React.SetStateAction<string>>;
  user: any;
}

type MenuItem = {
  name: string;
  text: string;
  icon: any;
  details: string | any[];
  buttonText: string;
};

const TopMobileLayout = (props: Props) => {
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

  const [shownLeftLayout, setShownLeftLayout] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [visibleTopBar, setVisibleTopBar] = useState(true);
  const [activeItem, setActiveItem] = useState<any>(undefined);
  const [shownChat, setShownChat] = useState(false);
  const refLeftLayout = useRef<HTMLDivElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);
  const refTopLayout = useRef<HTMLDivElement>(null);

  // remove scrollbar when shown left layout
  if (shownLeftLayout) {
    document.body.classList.add('top-mobile-layout__hidden-scrollbar');
  } else {
    document.body.classList.remove('top-mobile-layout__hidden-scrollbar');
  }

  // close leftlayout if click outside
  window.onclick = function (event: MouseEvent) {
    const modals: any[] = [];

    // click outside dropdown menu
    const dropdownMenuModals = document.getElementsByClassName('dropdown-menu');
    for (let i = 0; i < dropdownMenuModals.length; i++) {
      modals.push(dropdownMenuModals[i]);
    }

    // hide left layout when click outside
    modals.push(refMenu.current);
    modals.push(refLeftLayout.current);
    const leftChildEls = refLeftLayout.current?.querySelectorAll('div, img, a');
    const menuChildEls = refMenu.current?.querySelectorAll('div, img, a');
    if (leftChildEls) {
      for (let i = 0; i < leftChildEls.length; i++) {
        modals.push(leftChildEls[i]);
      }
    }
    if (menuChildEls) {
      for (let i = 0; i < menuChildEls.length; i++) {
        modals.push(menuChildEls[i]);
      }
    }

    // click outside notification items
    items.forEach((item) => {
      modals.push(document.getElementById(item.name));
      const notiChildEls = document.getElementById(item.name)?.querySelectorAll('div, img');
      if (notiChildEls) {
        for (let i = 0; i < notiChildEls.length; i++) {
          modals.push(notiChildEls[i]);
        }
      }
    });
    const isOutside = modals.every((modal) => modal != event.target);
    if (isOutside) {
      setShownLeftLayout(false);
      setActiveItem(undefined);
    }
  };

  // hide menu when scrolldown
  const handleScroll = () => {
    const currentScrollpos = document.body.scrollTop;
    const visible = prevScrollpos > currentScrollpos;

    setPrevScrollpos(currentScrollpos);
    setVisibleTopBar(visible);
  };

  useEffect(() => {
    if (shownLeftLayout) {
      refMenu.current?.classList.add('change');
    } else {
      refMenu.current?.classList.remove('change');
    }
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="flex">
      <div className={`flex relative w-sreen ${activeItem == 'dropdown-menu' ? 'right-2/3' : 'right-0'} duration-500`}>
        <div className={`${shownLeftLayout ? 'w-4/6' : 'w-0'} fixed duration-500`} ref={refLeftLayout}>
          <LeftLayout user={props.user} isMoblie={props.isMobile} />
        </div>
        <div className={`${shownLeftLayout ? 'w-4/6' : 'w-0'} duration-500`}></div>
        <div className={`flex flex-col w-2/6 ${(shownLeftLayout || activeItem == 'dropdown-menu') && 'opacity-50'}`}>
          <div
            ref={refTopLayout}
            className={`fixed flex flex-col h-20 w-screen ${
              visibleTopBar ? 'top-mobile-layout__shown-menu-bar' : 'top-mobile-layout__hidden-menu-bar'
            }`}
          >
            <div className="flex bg-gradient-to-r from-purple-500 via-purple-700 to-purple-500 h-10 px-3">
              <div ref={refMenu} className="flex" onClick={() => setShownLeftLayout(!shownLeftLayout)}>
                <div className="top-mobile-layout__menu-button h-min my-auto flex-none">
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </div>
              <div className="flex border-b h-7 my-auto border-gray-400 flex-grow mx-5">
                <img src={searchIcon} alt="icon" className="w-3 h-3 my-auto mr-2" />
                <input
                  className="bg-transparent text-white placeholder-white focus:outline-none"
                  placeholder="Search..."
                  value={props.searchText}
                  onChange={(e) => props.setSearchText(e.currentTarget.value)}
                />
              </div>
              <div
                className="flex dropdown-menu flex-none cursor-pointer"
                onClick={() => setActiveItem(activeItem != 'dropdown-menu' && 'dropdown-menu')}
              >
                <img
                  src={props.user?.avatar}
                  alt="avatar"
                  className={`dropdown-menu w-7 h-7 my-auto rounded-full transform hover:scale-110 duration-300`}
                />
              </div>
            </div>
            <div className="flex bg-white h-10 border-b">
              <div className="w-5/6 mx-auto my-auto flex justify-between">
                {items.map((item, i) => (
                  <Notification
                    key={i}
                    item={item}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    isMoblie={props.isMobile}
                  />
                ))}
                <a href="/cart" className="mx-2 cursor-pointer">
                  <img src={viewCartIcon} alt="icon" className="w-4 h-4 my-2 mx-4" />
                </a>
              </div>
            </div>
          </div>
          <div
            className={`mt-20 w-screen overflow-x-hidden h-max ${
              shownLeftLayout || activeItem == 'dropdown-menu' ? 'overscroll-none' : ''
            }`}
          >
            {props.comp}
            <RightSider />
          </div>
          <div
            className={`fixed bottom-0 ${shownLeftLayout ? '-right-2/3' : 'right-0'} ${
              activeItem == 'dropdown-menu' ? 'right-2/3' : 'right-0'
            } duration-500`}
          >
            <div className="relative">
              <div
                className="mr-8 p-3 bg-purple-700 rounded-l-xl rounded-tr-xl cursor-pointer"
                onClick={() => setShownChat(!shownChat)}
              >
                <img src={MessageIcon} alt="icon" className="w-3 h-3" />
              </div>
              {shownChat && (
                <SmallChatLayout
                  isMuted={props.isMuted}
                  setIsMuted={props.setIsMuted}
                  friendGroupToggle={props.friendGroupToggle}
                  setFriendGroupToggle={props.setFriendGroupToggle}
                  search={props.searchFriend}
                  setSearch={props.setSearchFriend}
                  user={props.user}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={`${activeItem == 'dropdown-menu' ? 'w-4/6' : 'w-0'} fixed duration-500 right-0 h-screen`}>
        <DropdownMenu isMoblie={props.isMobile} />
      </div>
    </div>
  );
};

export default TopMobileLayout;
