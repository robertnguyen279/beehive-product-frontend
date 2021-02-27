import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'actions/users';
import { RootState } from 'reducers';
import { useMediaQuery } from 'react-responsive';

import Rightlayout from './DefaultLayout/Rightlayout';
import TopLayout from './DefaultLayout/TopLayout';
import LeftLayout from './LeftLayout';
import TopMoblieLayout from './MoblieLayout/TopMobileLayout';

interface Props {
  children?: React.ReactNode;
}

const MainLayout = (props: Props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isLgScreen = useMediaQuery({ query: '(min-width: 980px)' });
  const isXlScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [friendGroupToggle, setFriendGroupToggle] = useState('friends');
  const [searchFriendGroup, setSearchFriendGroup] = useState('');

  useEffect(() => {
    dispatch(getUser());
  }, []);

  console.log(user);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col">
          <TopMoblieLayout
            searchText={searchText}
            setSearchText={setSearchText}
            comp={props.children}
            isMobile={isMobile}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            friendGroupToggle={friendGroupToggle}
            setFriendGroupToggle={setFriendGroupToggle}
            searchFriend={searchFriendGroup}
            setSearchFriend={setSearchFriendGroup}
            user={user}
          />
        </div>
      ) : (
        <div className="flex items-start">
          <LeftLayout user={user} isXlScreen={isXlScreen} />
          <TopLayout
            searchText={searchText}
            setSearchText={setSearchText}
            isXlScreen={isXlScreen}
            isLgScreen={isLgScreen}
            comp={props.children}
            user={user}
          />
          <Rightlayout
            search={searchFriendGroup}
            setSearch={setSearchFriendGroup}
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            friendGroupToggle={friendGroupToggle}
            setFriendGroupToggle={setFriendGroupToggle}
            user={user}
          />
        </div>
      )}
    </>
  );
};

export default MainLayout;
