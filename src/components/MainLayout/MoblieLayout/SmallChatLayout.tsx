import React, { useState } from 'react';
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

const SmallChatLayout = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="absolute right-0 bottom-9 w-64 bg-white border border-gray-300 rounded-xl flex flex-col">
      <div className="flex justify-between border-b border-gray-300 px-4 py-3">
        <div className="font-semibold text-purple-700">Messager</div>
        <div className="relative">
          <div onClick={() => setIsActive(!isActive)} className="font-bold cursor-pointer">
            ...
          </div>
          {isActive ? (
            <div
              onClick={() => props.setIsMuted(!props.isMuted)}
              className="flex absolute top-10 left-2 transform -translate-x-full w-32 h-8 bg-white shadow rounded-lg cursor-pointer"
            >
              <div className="text-sm my-auto mx-5">{props.isMuted ? 'Unmute' : 'Mute'}</div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col px-4">
        <div className="flex py-3">
          <div
            className={`mr-3 cursor-pointer hover:text-purple-700 ${
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
          <img src={searchIcon} alt="icon" className="w-3 h-3 absolute transform -translate-y-1/2 top-1/2 left-4" />
          <input
            placeholder={`Find ${props.friendGroupToggle == 'friends' ? 'friends' : 'groups'}`}
            type="text"
            value={props.search}
            onChange={(e) => props.setSearch(e.currentTarget.value)}
            className="focus:outline-none my-auto border rounded-3xl h-10 focus:border-purple-700 w-full pl-9 pr-2"
          />
        </div>
      </div>
      <div className="flex flex-col overflow-y-auto h-40 mx-4 my-3">
        {props.user &&
          (props.friendGroupToggle == 'friends' ? props.user.friends : props.user.groups).map(
            (item: any, i: number) => (
              <div className="flex my-2" key={i}>
                <div className="relative mr-2">
                  <img src={item.avatar} className="rounded-full w-8 h-8" alt="avatar" />
                  <div
                    className={`${
                      item.status == 'online' ? 'bg-green-300' : 'bg-gray-300'
                    } absolute w-3 h-3 rounded-full top-0 left-6 border border-white`}
                  />
                </div>
                <div className="my-auto text-xs font-medium">
                  {item.firstName} {item.lastName}
                </div>
              </div>
            ),
          )}
      </div>
    </div>
  );
};

export default SmallChatLayout;
