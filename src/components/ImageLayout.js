import React from 'react';

export default function ImageLayout({ children, column = 1, width = "100%", height = "auto" }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${column}, 1fr)`,
      gap: '20px',
      alignItems: 'start',
      marginBottom: '30px'
    }}>
      {childrenArray.map((child, index) => {
        // 自动获取图片标签里的 alt 文字作为描述
        const caption = child.props?.alt || "";

        return (
          <div key={index} style={{ textAlign: 'center' }}>
            {/* 图片容器 */}
            <div style={{ 
              display: 'inline-block', 
              width: width, 
              height: height,
              overflow: 'hidden'
            }}>
              {React.cloneElement(child, {
                style: { 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'contain', 
                  borderRadius: '8px',
                  display: 'block' // 消除图片下方微小间隙
                }
              })}
            </div>
            
            {/* 描述文字：如果有 alt 属性，就显示出来 */}
            {caption && (
              <div style={{
                marginTop: '8px',
                fontSize: '14px',
                color: '#666',
                fontStyle: 'italic',
                lineHeight: '1.5'
              }}>
                {caption}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}