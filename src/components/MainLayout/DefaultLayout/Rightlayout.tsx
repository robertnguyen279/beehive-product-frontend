import React, { useState, useEffect } from 'react';
import MessageIcon from 'assets/icons/forum.svg';
import searchIcon from 'assets/icons/search.svg';

interface Props {
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  friendGroupToggle: string;
  setFriendGroupToggle: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  user: any;
}

const Rightlayout = (props: Props) => {
  const [isCollapsed, setIsCollapse] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [chatHeight, setChatHeight] = useState<any>(window.innerHeight - 10 * 16);
  const [top, setTop] = useState(document.getElementById('head-list-chat')?.clientHeight);

  const chatHeightChange = () => {
    const top = document.getElementById('head-list-chat')?.clientHeight;
    setChatHeight(window.innerHeight - 10 * 16 - (top ? (isCollapsed ? 0 : top) : 0));
    setTop(top);
  };

  // change list-chat height when resize window
  useEffect(() => {
    window.addEventListener('resize', chatHeightChange);
    chatHeightChange();
    return () => window.removeEventListener('resize', chatHeightChange);
  }, [isCollapsed]);

  console.log(showBubble);

  return (
    <div
      className={`flex flex-col justify-between fixed right-0 ${
        isCollapsed || isActive ? 'bg-gray-100' : 'bg-white'
      } h-screen shadow z-40 duration-300`}
    >
      <div className={`${isCollapsed ? 'w-24' : 'w-64'} duration-700`}>
        <div>
          <div className="flex justify-between h-20 shadow z-40">
            <div className={`flex w-max my-auto ${isCollapsed ? 'mx-auto' : 'mx-8'}`}>
              <img src={MessageIcon} alt="icon" className="w-5 h-5 mr-2" />
              {!isCollapsed ? <div className="font-semibold">Messenger</div> : null}
            </div>
            {!isCollapsed ? (
              <div className="relative mr-8 my-auto">
                <button onClick={() => setIsActive(!isActive)} className="font-semibold focus:outline-none">
                  ...
                </button>
                {isActive ? (
                  <div
                    onClick={() => props.setIsMuted(!props.isMuted)}
                    className="flex absolute top-10 left-2 transform -translate-x-full w-32 h-8 bg-white shadow rounded-lg cursor-pointer"
                  >
                    <div className="text-sm my-auto mx-5">{props.isMuted ? 'Unmute' : 'Mute'}</div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex relative my-1">
              {!isCollapsed && (
                <div id="head-list-chat" className={`py-3 flex flex-col mx-8`}>
                  <div className="flex mb-3">
                    <div
                      className={`cursor-pointer mr-3 hover:text-purple-700 ${
                        props.friendGroupToggle == 'friends' ? 'text-purple-700' : ''
                      }`}
                      onClick={() => props.setFriendGroupToggle('friends')}
                    >
                      Friends
                    </div>
                    <div
                      className={`cursor-pointer hover:text-purple-700 ${
                        props.friendGroupToggle == 'groups' ? 'text-purple-700' : ''
                      }`}
                      onClick={() => props.setFriendGroupToggle('groups')}
                    >
                      Groups
                    </div>
                  </div>
                  <div className="flex relative">
                    <img
                      src={searchIcon}
                      alt="icon"
                      className="w-3 h-3 absolute transform -translate-y-1/2 top-1/2 left-4"
                    />
                    <input
                      type="text"
                      value={props.search}
                      onChange={(e) => props.setSearch(e.currentTarget.value)}
                      className="focus:outline-none my-auto border rounded-3xl h-10 focus:border-purple-700 w-full pl-9 pr-2"
                    />
                  </div>
                </div>
              )}

              <div
                className="absolute w-full duration-300 overflow-y-auto py-3"
                style={{ top: isCollapsed ? 0 : top, height: chatHeight }}
              >
                <div className={`${isCollapsed || isActive ? 'bg-gray-100' : 'bg-white'}`}>
                  {props.user &&
                    (props.friendGroupToggle == 'friends' ? props.user.friends : props.user.groups).map(
                      (item: any, i: number) => (
                        <div key={i} onClick={() => setShowBubble(true)} className="flex my-2">
                          <div className={`relative my-auto ${isCollapsed ? 'mx-auto' : 'ml-8 mr-2'}`}>
                            <img src={item.avatar} alt="avatar" className="rounded-full w-8 h-8" />
                            <div
                              className={`${
                                item.status == 'online' ? 'bg-green-300' : 'bg-gray-300'
                              } absolute w-3 h-3 rounded-full top-0 left-6 border border-white`}
                            />
                          </div>
                          {!isCollapsed ? (
                            <div className="my-auto text-xs font-medium">
                              {item.firstName} {item.lastName}
                            </div>
                          ) : null}
                        </div>
                      ),
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-30 bg-white h-20">
        <button className="" onClick={() => setIsCollapse(!isCollapsed)}>
          collapse
        </button>
      </div>
      <div className=" fixed left-0 bottom-0 right-32 z-50">{/* chart window */}</div>
    </div>
  );
};

export default Rightlayout;
