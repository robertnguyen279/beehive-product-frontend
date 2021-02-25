import React, { useState } from 'react';
import Logo from 'assets/icons/logo-icon.svg';

import me from './temp_api/me';

type MenuItem = {
  icon: string;
  item: string;
  linkTo: string;
};

const LeftLayout = () => {
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

  return (
    <div className="mainlayout__scrollbar mainlayout__style-1 flex flex-col fixed overflow-y-auto h-full w-1/5 bg-gray-100 ">
      <div className="w-full bg-gray-700 pb-40">
        <div className="mx-auto mt-16 mb-5 w-max">
          <a href="/activities">
            <img src={Logo} alt="Logo" className="w-16 mx-auto" />
            <div className="font-mono mx-auto w-min text-white text-xl mt-2">beehive</div>
            <div className="font-mono mx-auto w-max text-white text-xs mt-1">Social Network</div>
          </a>
        </div>

        <div className="bg-white w-4/5 py-8 rounded-lg divide-y divide-gray-300 shadow-2xl absolute mx-auto inset-x-0 top-52">
          <div>
            <a href="members/user">
              <img
                className="mx-auto mb-2 w-14 h-14 p-1 ring-1 ring-gray-300 rounded-full"
                src={me.avatar}
                alt="avatar"
              />
              <div className="mx-auto w-max mb-2 font-medium text-black hover:underline hover:text-purple-700">
                {me.name}
              </div>
            </a>
            <div className="mx-auto w-max mb-2 text-gray-400 text-xs">{me.memberStatus}</div>
          </div>

          <div className="flex flex-around mx-auto w-max px-8 py-2">
            <div className="px-2">
              <div className="mx-auto w-min font-medium text-gray-500">{me.friends}</div>
              <div className="mx-auto w-min text-gray-400 text-xs">Friends</div>
            </div>
            <div className="px-2">
              <div className="mx-auto w-min font-medium text-gray-500">{me.groups}</div>
              <div className="mx-auto w-min text-gray-400 text-xs">Groups</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-28 w-max mx-auto pb-10">
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
            <div
              className={`mx-auto font-normal mt-1 ${
                hoverId == `${i}` || loc == item.linkTo ? 'text-purple-700' : 'text-gray-500'
              }`}
            >
              {item.item}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftLayout;
