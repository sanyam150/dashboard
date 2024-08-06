import React from 'react';
import './css/orderActivities.css';
import { orderInformationMockData } from '../mockData/mockData';
import { RiArrowRightSLine } from 'react-icons/ri';
import Chart from './Chart';
import SelectList from './DropDownButton';
const OrderActivities = ({ chartData }) => {
  const { orderActivity } = orderInformationMockData;
  return (
    <div className='orderActivities_wrapper'>
      <div className='order_activities_wrapper_1'>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3px',
            position: 'relative',
            zIndex: 1000,
          }}
        >
          <span style={{ fontWeight: '700', paddingLeft: '20px' }}>
            Activity
          </span>
          <SelectList />
        </div>
        <Chart data={chartData} />
      </div>
      <div className='order_activities_wrapper_2'>
        {orderActivity.map((data, index) => (
          <div
            className='order_activities_data'
            key={`order_activities_${index}`}
          >
            <div
              style={{
                display: 'flex',
                fontSize: '1.5rem',
                width: '50px',
                height: '50px',
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
                fontSize: '1.5rem',
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
