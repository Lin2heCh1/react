import React from 'react';
import { List } from 'antd-mobile';
import { ShopbagOutline } from 'antd-mobile-icons';
import '../global.css';

const recommends = [
  { name: '老街小吃', desc: '本地特色美食', address: 'XX路123号' },
  { name: '山顶公园', desc: '观景好去处', address: '山顶大道' },
];

export default function RecommendPage() {
  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ marginBottom: 24 }}><ShopbagOutline className="air-icon" /> 美食景点推荐</h3>
      <div className="air-list">
        <List>
          {recommends.map(item => (
            <List.Item key={item.name} description={item.desc}>
              <div style={{ fontWeight: 600 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{item.address}</div>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
} 