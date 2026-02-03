import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css'; 

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/DetailTwo"> {/* 👈 这里的 /docs/intro 确保改为你 docs 文件夹下第一篇文档的文件名 */}
            开始阅读指南 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="首页"
      description="专业文档写作指南">
      <HomepageHeader />
     <main>
        <section style={{padding: '4rem 0'}}>
          <div className="container">
            {/* 第一行 */}
            <div className="row" style={{marginBottom: '2rem'}}>
              <div className="col col--6">
                <div className="card-demo" style={{height: '100%'}}>
                  <div className="card" style={{padding: '2rem', height: '100%', border: '1px solid #eee'}}>
                    <h3>📖 核心原则</h3>
                    <p>专注于全球视野下的内容表达，确保技术文档的一致性与专业度。</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="card-demo" style={{height: '100%'}}>
                  <div className="card" style={{padding: '2rem', height: '100%', border: '1px solid #eee'}}>
                    <h3>🛠️ 落地指南</h3>
                    <p>从 Markdown 规范到 SEO 优化，全方位提升文档工程的交付质量。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 第二行 - 新增对称项 */}
            <div className="row">
              <div className="col col--6">
                <div className="card-demo" style={{height: '100%'}}>
                  <div className="card" style={{padding: '2rem', height: '100%', border: '1px solid #eee'}}>
                    <h3>🎨 视觉规范</h3>
                    <p>统一插图、配色与排版风格，让技术内容不仅好读，而且好看。</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className="card-demo" style={{height: '100%'}}>
                  <div className="card" style={{padding: '2rem', height: '100%', border: '1px solid #eee'}}>
                    <h3>⚡ 效能工具</h3>
                    <p>推荐自动化检测与自动化发布工具，将重复劳动降至最低。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}