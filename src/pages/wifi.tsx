import React from 'react';
import { Card } from 'antd-mobile';
import { FileOutline } from 'antd-mobile-icons';
import '../global.css';

export default function WifiPage() {
  const wifiName = 'Homestay_WiFi';
  const wifiPassword = '12345678';
  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ marginBottom: 24 }}><FileOutline className="air-icon" /> WiFi 信息</h3>
      <div className="air-card">
        <div style={{ fontWeight: 600, marginBottom: 8 }}>WiFi 名称</div>
        <div style={{ fontSize: 18, marginBottom: 16 }}>{wifiName}</div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>WiFi 密码</div>
        <div style={{ fontSize: 18 }}>{wifiPassword}</div>
      </div>
    </div>
  );
} 