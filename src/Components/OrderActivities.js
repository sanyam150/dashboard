import React from 'react';
import './css/orderActivities.css';
import { orderInformationMockData } from '../mockData/mockData';
import { RiArrowRightSLine } from 'react-icons/ri';

const OrderActivities = () => {
  const { orderActivity } = orderInformationMockData;
  return (
    <div className='orderActivities_wrapper'>
      <div className='order_activities_wrapper_1'></div>
      <div className='order_activities_wrapper_2'>
        {orderActivity.map((data) => (
          <div className='order_activities_data'>
            <div
              style={{
                display: 'flex',
                fontSize: '2rem',
                width: '60px',
                height: '60px',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `${data.background_color}`,
                color: `${data.icon_color}`,
                borderRadius: '50%',
              }}
            >
              {data.icon}
            </div>
            <div
              style={{
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '10px',
                width: '60%',
              }}
            >
              {data.type}
            </div>
            <div
              style={{
                fontSize: '2rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  height: '50px',
                  width: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#46474c',
                  color: '#b9babd',
                  borderRadius: '50%',
                }}
              >
                <RiArrowRightSLine />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderActivities;
