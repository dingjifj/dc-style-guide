import React from 'react';
import Footer from '@theme-original/DocItem/Footer'; // 这里的 original 就是原版
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();

  return (
    <>
      {/* 1. 先渲染原有的底部内容（编辑此页、更新时间等） */}
      <Footer {...props} />

      {/* 2. 在下方追加你的反馈区 */}
      <div style={{ 
        marginTop: '2rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid var(--ifm-hr-border-color)' 
      }}>
        <h3 style={{ marginBottom: '1rem' }}>此文档是否有帮助？</h3>
        <Giscus
          id="feedback"
          repo="dingjifj/dc-style-guide"
          repoId="R_kgDORDCHcw" 
          category="General"
          categoryId="DIC_kwDORDCHc84C15ye"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme={colorMode === 'dark' ? 'dark' : 'light'}
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </>
  );
}
