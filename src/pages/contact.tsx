import React from 'react';
import { Button } from 'antd-mobile';
import { UserOutline } from 'antd-mobile-icons';
import '../global.css';

export default function ContactPage() {
  const phone = '13800000000';
  return (
    <div style={{ padding: 20 }}>
      <h3 style={{ marginBottom: 24 }}><UserOutline className="air-icon" /> 联系管家</h3>
      <div className="air-card" style={{ textAlign: 'center' }}>
        <Button
          color="primary"
          className="air-btn"
          block
          size="large"
          onClick={() => window.location.href = `tel:${phone}`}
        >
          一键呼叫管家
        </Button>
      </div>
    </div>
  );
} 