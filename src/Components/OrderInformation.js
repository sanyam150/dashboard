import React from 'react';
import './css/OrderInformation.css';
import CircularProgress from './CircularProgress';

const OrderInformation = ({ OrderInformation, profits }) => {
  return (
    <div className='order_information_wrapper'>
      <div className='order_information_wrapper_1'>
        {OrderInformation.map((data) => (
          <div className='order_information_containers'>
            <div
              className='order_info_icons'
              style={{
                color: data.icon_color,
                backgroundColor: data.background_color,
                borderRadius: '8px',
              }}
            >
              {data.icon}
            </div>
            <div>
              <span>{data.type}</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: ' space-between',
              }}
            >
              <span style={{ fontSize: '20px', fontWeight: '800' }}>
                {data.total}
              </span>
              <span>
                {data.percentage > 0 ? (
                  <span style={{ color: '#09926b', fontWeight: '800' }}>
                    &#11205; {data.percentage}%
                  </span>
                ) : (
                  <span style={{ color: '#cf4d4d', fontWeight: '800' }}>
                    &#11206; {data.percentage.toString().slice(1)}%
                  </span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className='order_information_wrapper_2'>
        <div className='order_info_profit_wrapper'>
          <div>
            <span style={{ fontSize: '12px' }}>Net Profit</span>
          </div>
          <div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: '800',
                paddingLeft: '5px',
              }}
            >
              {profits.netProfit}
            </span>
          </div>
          <div>
            <span
              style={{
                fontWeight: '800',
                paddingLeft: '5px',
                color: '#00c68a',
              }}
            >
              &#11205; {profits.percentage}%
            </span>
          </div>
        </div>
        <div className='order_info_circularProgress_wrapper'>
          <CircularProgress goalCompleted={profits.goalCompleted} />
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
