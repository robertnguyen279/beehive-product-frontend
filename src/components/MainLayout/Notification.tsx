import React from 'react';

type MenuItem = {
  name: string;
  text: string;
  icon: any;
  details: string | any[];
  buttonText: string;
};

interface Props {
  activeItem: any;
  setActiveItem: React.Dispatch<any>;
  item: MenuItem;
  isMoblie?: boolean;
}

const Notification = (props: Props) => {
  return (
    <div id={props.item.name} className={`${props.isMoblie ? '' : 'relative'} flex`}>
      <div
        className={`${props.isMoblie ? '' : 'bg-gray-100 rounded-full'} mx-2 cursor-pointer flex`}
        onClick={() => props.setActiveItem(props.activeItem != props.item.name && props.item.name)}
      >
        <img src={props.item.icon} alt="icon" className={`${props.isMoblie ? 'w-4 h-4 my-2 mx-4' : 'w-3 h-3 m-2'}`} />
      </div>
      {props.item.name == props.activeItem ? (
        <div
          className={`absolute ${
            props.isMoblie ? 'w-screen left-0 top-20' : 'rounded-lg top-14 left-1/2 transform -translate-x-1/2 w-64'
          } bg-white z-50 shadow-lg h-max cursor-auto`}
        >
          <div className="flex flex-col my-3 divide-y divide-gray-200">
            <div className="px-5 mb-2 w-full font-medium">{props.item.text}</div>
            <div className="px-5 mb-2 w-full">
              <div className="mt-2">
                {typeof props.item.details != 'string' ? (
                  props.item.details.map((detail, i) => <div key={i}>{detail}</div>)
                ) : (
                  <div className="bg-yellow-100 rounded px-5 text-yellow-700 py-4">{props.item.details}</div>
                )}
              </div>
            </div>
            <div className="flex w-full">
              <div className="mx-5 w-full">
                <button className="w-full mx-auto mt-2 py-1 rounded-full border focus:outline-none text-purple-700 border-purple-700 hover:text-white hover:bg-purple-700">
                  {props.item.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
