import React from 'react';
import { List } from 'antd-mobile';
import { RestaurantOutline } from 'antd-mobile-icons';
import '../global.css';

const foods = [
  { name: '老街小吃', desc: '本地特色美食', address: 'XX路123号' },
  { name: '渔村海鲜', desc: '新鲜海味', address: '渔港路88号' },
  { name: '山野农家菜', desc: '健康有机', address: '山脚下农庄' },
];

export default function FoodPage() {
  return (
    <div style={{ padding: 20, maxWidth: 480, margin: '0 auto' }}>
      <div className="muji-section-title"><RestaurantOutline className="air-icon" /> 美食推荐</div>
      <div className="air-list">
        <List>
          {foods.map(item => (
            <List.Item key={item.name} description={item.desc}>
              <div style={{ fontWeight: 600 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: '#bfae9e' }}>{item.address}</div>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
} 