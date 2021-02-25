import React, { useState } from 'react';
import MessageIcon from 'assets/icons/forum.svg';

const Rightlayout = () => {
  const [isCollapsed, setIsCollapse] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div
      className={`flex flex-col justify-between fixed right-0 ${
        isCollapsed || isActive ? 'bg-gray-100' : 'bg-white'
      } h-screen shadow z-50 transform duration-700`}
    >
      <div className={`${isCollapsed ? 'w-24' : 'w-64'} transform duration-700`}>
        <div>
          <div className="flex justify-between h-20 shadow">
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
                    onClick={() => setIsMuted(!isMuted)}
                    className="flex absolute top-10 left-2 transform -translate-x-full w-32 h-8 bg-white shadow rounded-lg cursor-pointer"
                  >
                    <div className="text-sm my-auto mx-5">{isMuted ? 'Unmute' : 'Mute'}</div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <div>
            <div>user avatar</div>
          </div>
        </div>
      </div>
      <button onClick={() => setIsCollapse(!isCollapsed)}>collapse</button>
    </div>
  );
};

export default Rightlayout;
