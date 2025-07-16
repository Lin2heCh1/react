import React from 'react';
import '../global.css';

export default function GuidePage() {
  return (
    <div style={{ padding: 20, maxWidth: 480, margin: '0 auto' }}>
      <div className="air-card">
        <div className="muji-section-title">入住流程</div>
        <ol style={{ paddingLeft: 18, margin: 0 }}>
          <li>到达民宿后，联系管家办理入住</li>
          <li>出示身份证，完成登记</li>
          <li>领取房卡/门锁密码</li>
          <li>了解房屋设施及使用说明</li>
        </ol>
      </div>
      <div className="air-card">
        <div className="muji-section-title">注意事项</div>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          <li>请爱护房屋及物品</li>
          <li>禁止室内吸烟</li>
          <li>夜间请保持安静</li>
          <li>如有问题请随时联系管家</li>
        </ul>
      </div>
    </div>
  );
} 