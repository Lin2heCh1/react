import React from 'react';
import { List } from 'antd-mobile';
import { AppOutline } from 'antd-mobile-icons';
import '../global.css';

const scenics = [
  { name: '山顶公园', desc: '观景好去处', address: '山顶大道' },
  { name: '海边栈道', desc: '漫步观海', address: '滨海路' },
  { name: '古镇老街', desc: '历史文化体验', address: '古镇路' },
];

export default function ScenicPage() {
  return (
    <div style={{ padding: 20, maxWidth: 480, margin: '0 auto' }}>
      <div className="muji-section-title"><AppOutline className="air-icon" /> 景点攻略</div>
      <div className="air-list">
        <List>
          {scenics.map(item => (
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