import React, { useState } from 'react';
import Logo from 'assets/icons/logo-icon.svg';

type MenuItem = {
  icon: string;
  item: string;
  linkTo: string;
};

interface Props {
  isXlScreen?: boolean;
  isMoblie?: boolean;
  user: any;
}

const LeftLayout = (props: Props) => {
  const [hoverId, setHoverId] = useState<any>(undefined);
  const url = window.location.href.split('/');
  const loc = `/${url[url.length - 1]}`;

  const items: MenuItem[] = [
    { icon: 'mainlayout__icon-activity', item: 'Activity', linkTo: '/activities' },
    { icon: 'mainlayout__icon-photo', item: 'Photos', linkTo: '/photos' },
    { icon: 'mainlayout__icon-watch', item: 'Watch', linkTo: '/watch' },
    { icon: 'mainlayout__icon-people', item: 'People', linkTo: '/people' },
    { icon: 'mainlayout__icon-group', item: 'Groups', linkTo: '/groups' },
    { icon: 'mainlayout__icon-advert', item: 'Adverts', linkTo: '/adverts' },
    { icon: 'mainlayout__icon-shop', item: 'Shop', linkTo: '/shop' },
    { icon: 'mainlayout__icon-job', item: 'Jobs', linkTo: '/jobs' },
    { icon: 'mainlayout__icon-forum', item: 'Forums', linkTo: '/forums' },
    { icon: 'mainlayout__icon-blog', item: 'Blog', linkTo: '/blog' },
  ];

  const memberRole = (roles: number) => {
    switch (roles) {
      case 1:
        return 'Admin';
      default:
        return 'Member';
    }
  };

  return (
    <div
      className={`mainlayout__scrollbar mainlayout__style-1 flex flex-col ${
        props.isMoblie ? 'relative' : 'fixed'
      } left-0 overflow-y-auto h-screen ${
        !props.isMoblie ? (props.isXlScreen ? 'w-1/5' : 'w-20') : 'w-full'
      } bg-gray-100 z-10 border-r border-gray-200`}
    >
      <div
        className={`flex w-full bg-gray-700 ${
          !props.isMoblie ? (props.isXlScreen ? 'h-max pb-52' : 'h-20 pb-0') : 'h-max pb-44'
        }`}
      >
        <div
          className={`flex flex-col mx-auto 1.5xl:mt-16 ${props.isXlScreen || props.isMoblie ? 'mt-8' : 'mt-0'} w-full`}
        >
          <a href="/activities" className="flex flex-col my-auto mx-auto w-max">
            <img src={Logo} alt="Logo" className="xl:w-16 xl:h-16 w-12 h-12 mx-auto" />
            {(props.isXlScreen || props.isMoblie) && (
              <div className="flex flex-col">
                <div className="font-mono mx-auto w-max text-white text-xl mt-2">beehive</div>
                <div className="font-mono mx-auto w-max text-white text-xs mt-1">Social Network</div>
              </div>
            )}
          </a>
        </div>
        {(props.isXlScreen || props.isMoblie) && (
          <div
            className={`absolute bg-white 1.5xl:w-60 ${
              props.isMoblie ? 'w-56' : 'w-6/7'
            } 1.5xl:top-52 top-44 py-8 rounded-lg divide-y divide-gray-300 shadow-2xl mx-auto inset-x-0`}
          >
            <div className="w-max mx-auto">
              <a href="members/user">
                <img
                  className="mx-auto mb-2 w-14 h-14 p-1 ring-1 ring-gray-300 rounded-full"
                  src={props.user?.avatar}
                  alt="avatar"
                />
                <div className="mx-auto w-max mb-2 font-medium text-black hover:underline hover:text-purple-700">
                  {props.user?.firstName} {props.user?.lastName}
                </div>
              </a>
              <div className="mx-auto w-max mb-2 text-gray-400 text-xs">{memberRole(props.user?.roles)}</div>
            </div>
            {!props.isMoblie && (
              <div className="flex flex-around mx-auto w-max px-8 py-2">
                <div className="px-2">
                  <div className="mx-auto w-min font-medium text-gray-500">{props.user?.friends.length}</div>
                  <div className="mx-auto w-min text-gray-400 text-xs">Friends</div>
                </div>
                <div className="px-2">
                  <div className="mx-auto w-min font-medium text-gray-500">{props.user?.groups.length}</div>
                  <div className="mx-auto w-min text-gray-400 text-xs">Groups</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div
        className={`grid ${
          !props.isMoblie ? (props.isXlScreen ? 'grid-cols-2 mt-28' : 'grid-cols-1 mt-8') : 'grid-cols-2 mt-20'
        } w-max mx-auto pb-10`}
      >
        {items.map((item: MenuItem, i) => (
          <a
            id={`${i}`}
            key={i}
            className="flex flex-col col-span-1 my-4 mx-6 "
            href={item.linkTo}
            onMouseEnter={(e) => setHoverId(e.currentTarget.id)}
            onMouseLeave={() => setHoverId(undefined)}
          >
            <i
              className={`${item.icon} mainlayout__icon mx-auto ${
                hoverId == `${i}` || loc == item.linkTo ? 'bg-purple-700' : 'bg-gray-500'
              }`}
            />
            {(props.isXlScreen || props.isMoblie) && (
              <div
                className={`mx-auto font-normal mt-1 ${
                  hoverId == `${i}` || loc == item.linkTo ? 'text-purple-700' : 'text-gray-500'
                }`}
              >
                {item.item}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftLayout;
