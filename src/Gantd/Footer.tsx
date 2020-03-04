import React, { useEffect, useState } from 'react';
import logo from './images/logo.png'
import { Col, Row } from 'antd'
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
const ScrollOverPack = ScrollAnim.OverPack;
import GantImg from './images/gant.png'


export default function Footer(props: any) {

  const span = { md: 8, sm: 24, xs: 24 }

  return (
    <>
      <footer className="footer" {...props}
      >
        <div className="full-width" style={{ padding: '50px 50px 0 50px' }}>
          <Row>
            {/* <ScrollOverPack key="3132342"> */}
            <QueueAnim
              key="queue"
              type={['bottom', 'top']}
              delay={200}
            >
              <Col key="a" {...span}>
                <img src={logo} style={{ height: 40 }} />
                <div>专注于数据密集型业务场景</div>
              </Col>
              <Col key="b" {...span}>

                <div className="title">
                  首页
              </div>
                <div className="link">
                  <a href="#datacell">数据单元</a>
                </div>
                <div className="link">
                  <a href="#form">表单</a>
                </div>
                <div className="link">
                  <a href="#table">表格</a>
                </div>
              </Col>
              <Col key="c" {...span}>
                <div className="title">
                  链接
              </div>
                <div className="link">
                  <a href="">文档</a>
                </div>
                <div className="link">
                  <a href="">GITHUB</a>
                </div>
              </Col>
            </QueueAnim>
            {/* </ScrollOverPack> */}
          </Row>

        </div >
        <div style={{ borderTop: '1px solid rgba(128,128,128,0.3)', marginTop: 30, padding: 10, textAlign: 'center' }}>
          Made With ✊🏼 By 😜 Gant FDT
          </div>
        <div style={{ borderTop: '1px solid rgba(128,128,128,0.3)', padding: 10, textAlign: 'center' }}>
          Sponsor <a href="https://www.gantsoftware.com/" target="_blank" style={{ display: 'inline-block',color:'#fff' }}><img src={GantImg} style={{ width: 40, display: 'inline-block' }} />
            <p style={{ fontWeight: 'bold', display: 'inline-block' }}>GantSoftware</p>
          </a>
        </div>
      </footer>
    </>
  );
}
