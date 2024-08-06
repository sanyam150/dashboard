import React from 'react';
import './css/CustomerReview.css';
import StarRating from './StarRating';

const CustomerReview = ({ recentOrders, customerFeedBack }) => {
  return (
    <div className='CustomerReview_wrapper'>
      <div className='CustomerReview_wrapper_1'>
        <h4>Recent Orders</h4>
        <table className='table table-dark'>
          <thead>
            <tr>
              <th scope='col'>customer</th>
              <th scope='col'>Order No.</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((data, index) => (
              <tr key={`recentOrders_${index}`}>
                <th scope='row'>{data.name}</th>
                <td>{data.orderNo}</td>
                <td>{data.amount}</td>
                <td>
                  {data.status === 'Delivered' ? (
                    <span
                      style={{
                        padding: '2px 5px',
                        color: '#09916b',
                        backgroundColor: '#155144',
                        borderRadius: '10px',
                      }}
                    >
                      {data.status}
                    </span>
                  ) : (
                    <span
                      style={{
                        padding: '2px 5px',
                        color: '#954246',
                        backgroundColor: '#5c3236',
                        borderRadius: '10px',
                      }}
                    >
                      {data.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='CustomerReview_wrapper_2'>
        <h4>Customer's Feedback</h4>
        {customerFeedBack.map((data, index) => (
          <div
            className='customerFeedBack_wrapper'
            key={`customerFeedBack_${index}`}
          >
            <div>
              <span
                style={{
                  fontSize: '1.5rem',
                  margin: '10px',
                }}
              >
                {data.icon}
              </span>
              <span>{data.name}</span>
            </div>
            <div style={{ margin: '0px 10px' }}>
              <StarRating rating={data.rating} />
            </div>
            <div style={{ margin: '0px 10px' }}>{data.review}</div>
            <hr style={{ margin: '2px' }}></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
