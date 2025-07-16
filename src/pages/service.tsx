import React from 'react';
import { List } from 'antd-mobile';
import { AppOutline } from 'antd-mobile-icons';
import '../global.css';

const services = [
  { name: '超市', address: 'XX超市，XX路88号' },
  { name: '医院', address: 'XX医院，XX路66号' },
];

export default function ServicePage() {
  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ marginBottom: 24 }}><AppOutline className="air-icon" /> 生活服务</h3>
      <div className="air-list">
        <List>
          {services.map(item => (
            <List.Item key={item.name}>
              <div style={{ fontWeight: 600 }}>{item.name}</div>
              <div style={{ fontSize: 12, color: '#888' }}>{item.address}</div>
            </List.Item>
          ))}
        </List>
      </div>
    </div>
  );
} 