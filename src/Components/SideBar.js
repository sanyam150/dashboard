import React, { useState } from 'react';
import './css/SideBar.css';
import { BsFillGridFill } from 'react-icons/bs';
import {
  FaHome,
  FaClipboard,
  FaWallet,
  FaShoppingBag,
  FaPowerOff,
} from 'react-icons/fa';
import { BsFileBarGraphFill } from 'react-icons/bs';
import { sideBarSliderMovement } from '../PageUtils/utils';

const SideBar = () => {
  const [activeTabId, setActiveTabId] = useState('tab-id-1');
  const setSideBarSliderMovement = (tabActive, tabId) => {
    const element = document.getElementsByClassName('sideBar_slider')[0];
    element.style.top = `${sideBarSliderMovement(tabActive)}%`;

    setActiveTabId(tabId);
  };

  return (
    <div className='sidebar_wrapper'>
      <div className='sidebar_gridIcon_wrapper'>
        <BsFillGridFill style={{ color: '#7192fc' }} />
      </div>
      <div className='sidebar_container'>
        <div className='sideBar_slider_wrapper'>
          <div className='sideBar_slider'></div>
        </div>
        <div className='sideBar_icons_wrapper'>
          <div className='sideBar_icons_wrapper_list_1'>
            <FaHome
              className={`sideBar_icons_image ${
                activeTabId === 'tab-id-1' ? 'add_backgroundColor' : ''
              }`}
              onClick={() => setSideBarSliderMovement(1, 'tab-id-1')}
              id='tab-id-1'
            />
            <BsFileBarGraphFill
              className={`sideBar_icons_image ${
                activeTabId === 'tab-id-2' ? 'add_backgroundColor' : ''
              }`}
              onClick={() => setSideBarSliderMovement(2, 'tab-id-2')}
              id='tab-id-2'
            />
            <FaClipboard
              className={`sideBar_icons_image ${
                activeTabId === 'tab-id-3' ? 'add_backgroundColor' : ''
              }`}
              onClick={() => setSideBarSliderMovement(3, 'tab-id-3')}
              id='tab-id-3'
            />
            <FaWallet
              className={`sideBar_icons_image ${
                activeTabId === 'tab-id-4' ? 'add_backgroundColor' : ''
              }`}
              onClick={() => setSideBarSliderMovement(4, 'tab-id-4')}
              id='tab-id-4'
            />
            <FaShoppingBag
              className={`sideBar_icons_image ${
                activeTabId === 'tab-id-5' ? 'add_backgroundColor' : ''
              }`}
              onClick={() => setSideBarSliderMovement(5, 'tab-id-5')}
              id='tab-id-5'
            />
          </div>
          <div className='sideBar_icons_wrapper_list_2'>
            <FaPowerOff className='sideBar_icons_image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
