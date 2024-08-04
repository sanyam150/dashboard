import { IoBagAdd, IoBagCheck } from 'react-icons/io5';
import { BsBagDashFill } from 'react-icons/bs';
import { FaSackDollar } from 'react-icons/fa6';
import { AiOutlineAim } from 'react-icons/ai';
import { IoFastFood } from 'react-icons/io5';
import { BiSolidDish } from 'react-icons/bi';

export const orderInformationMockData = {
  orderInformation: [
    {
      type: 'Total Orders',
      total: 75,
      percentage: 3,
      icon: <IoBagAdd />,
      icon_color: '#4667fa',
      background_color: '#273166',
    },
    {
      type: 'Total Delivered',
      total: 70,
      percentage: -3,
      icon: <IoBagCheck />,
      icon_color: '#00c68a',
      background_color: '#145044',
    },
    {
      type: 'Total Cancelled',
      total: 5,
      percentage: 3,
      icon: <BsBagDashFill />,
      icon_color: '#5d3035',
      background_color: '#f05c5c',
    },
    {
      type: 'Total Revenue',
      total: `$12k`,
      percentage: -3,
      icon: <FaSackDollar />,
      icon_color: '#5a2849',
      background_color: '#e63c9d',
    },
  ],
  NetProfit: {
    netProfit: `$ 6759.25`,
    percentage: 3,
    goalCompleted: 70,
  },
  orderActivity: [
    {
      type: 'Goals',
      icon: <AiOutlineAim />,
      icon_color: '#5d3035',
      background_color: '#f05c5c',
    },
    {
      type: 'Popular Dishes',
      icon: <IoFastFood />,
      icon_color: '#4667fa',
      background_color: '#273166',
    },
    {
      type: 'Menus',
      icon: <BiSolidDish />,
      icon_color: '#20769d',
      background_color: '#20485f',
    },
  ],
};
