import React from 'react';
import { Grid } from 'antd-mobile';
import { useNavigate } from 'umi';
import { AppOutline, FileOutline, ShopbagOutline, UserOutline, CompassOutline } from 'antd-mobile-icons';
import '../global.css';

const features = [
  { title: 'WiFi 信息', path: '/wifi', icon: <FileOutline className="air-icon" /> },
  { title: '入住指引', path: '/guide', icon: <CompassOutline className="air-icon" /> },
  { title: '美食推荐', path: '/food', icon: <ShopbagOutline className="air-icon" /> },
  { title: '景点攻略', path: '/scenic', icon: <AppOutline className="air-icon" /> },
  { title: '生活服务', path: '/service', icon: <ShopbagOutline className="air-icon" /> },
  { title: '联系管家', path: '/contact', icon: <UserOutline className="air-icon" /> },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 20, minHeight: '100vh', maxWidth: 480, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <img src={require('../../tideSongLogo.png')} alt="logo" style={{ maxWidth: 220, maxHeight: 80, objectFit: 'contain', background: 'none', borderRadius: 8 }} />
      </div>
      <Grid columns={2} gap={18}>
        {features.map(f => (
          <Grid.Item key={f.path}>
            <div
              className="air-card"
              style={{ textAlign: 'center', cursor: 'pointer', minHeight: 90 }}
              onClick={() => navigate(f.path)}
            >
              {f.icon}
              <div style={{ fontSize: 16, marginTop: 6 }}>{f.title}</div>
            </div>
          </Grid.Item>
        ))}
      </Grid>
    </div>
  );
} 