import React from 'react';

interface Props {
  isLgScreen?: boolean;
  isMoblie?: boolean;
}

const DropdownMenu = (props: Props) => {
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

  return (
    <div
      className={`${
        props.isMoblie ? 'w-full h-full overflow-y-auto' : 'absolute top-14 -left-24 w-36 rounded-xl'
      } flex flex-col shadow-lg divide-y divide-gray-200 bg-white`}
    >
      {dropdownMenu.map((item, i) => (
        <a className="w-full px-6 py-2 text-gray-500 hover:text-purple-700" key={i} href={item.linkTo}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
