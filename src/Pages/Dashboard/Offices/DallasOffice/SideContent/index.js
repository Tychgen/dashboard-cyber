import React from 'react'
import {Row, Col, Tag, Progress, Divider} from  'antd'
import { QuestionCircleOutlined, BugFilled, SmileOutlined, RocketOutlined, ChromeOutlined } from '@ant-design/icons';

const SideContentDallas = () => {
    const customStyleCol2 = {
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '3%',
        paddingLeft:"20px" 
      };


  return (
    <>
      <Col span={10} style={customStyleCol2}>
         <Row gutter={16}>
            <Col span={12}>
            <h3>Dallas Office</h3>
            </Col>
            <Col span={12} style={{marginTop:'20px', paddingLeft:"10rem"}}>
            <Tag>View details</Tag>
            </Col>
         </Row>
         <div><strong>40</strong> shared desks + <strong>39</strong> private offices</div>
         <div> Maximum capacity: <strong>96 people</strong></div>
         <br />
         <div><strong>Current office occupancy:</strong></div>
         <Row>
          <Col span={3}>
            <span style={{fontSize:"25px"}}><strong>50%</strong></span>
          </Col>
          <Col span={3} style={{marginTop:"10px"}}>
            <span>48 people</span>
          </Col>
         </Row>
         <Progress percent={50} status="active" strokeWidth={15} />
         <p><strong>Criteria for increasing occupancy:</strong></p>
         <Row>
            <Col span={12}>
         <span>Haven Guidelines <QuestionCircleOutlined /></span>
            </Col>
            <Col span={12} style={{paddingLeft:`10rem`}}>
             <Tag color="red">Not met</Tag>
            </Col>
         </Row>
         <Divider/>
         <Row>
            <Col span={12}>
         <span>County/State Guidelines <QuestionCircleOutlined /></span>
            </Col>
            <Col span={12} style={{paddingLeft:`10rem`}}>
             <Tag color="green">Met</Tag>
            </Col>
         </Row>
         <Divider/>
         <Row style={{paddingLeft:`1rem`}}>
            <Col span={3}>
            <BugFilled style={{ fontSize: '36px' }} />
            </Col>
            <Col span={12}>
               <span><strong>Estimated office infection rate:</strong></span>
               <div style={{color:'green'}}><strong>0.3% (low)</strong></div>
            </Col>
         </Row>
         <br />
         <Row style={{paddingLeft:`1rem`}}>
            <Col span={3}>
            <SmileOutlined style={{ fontSize: '36px' }} />
            </Col>
            <Col span={12}>
               <span><strong>Employee satisfaction rate:</strong></span>
               <div style={{color:'green'}}><strong>65%(low)</strong></div>
            </Col>
         </Row>
         <br />
         <Row style={{paddingLeft:`1rem`}}>
            <Col span={3}>
            <RocketOutlined style={{ fontSize: '36px' }} />
            </Col>
            <Col span={12}>
               <span><strong>Employee vaccination rate:</strong></span>
               <div style={{color:'blue'}}><strong>10%</strong></div>
            </Col>
         </Row>
         <br />
         <Row style={{paddingLeft:`1rem`}}>
            <Col span={3}>
            <ChromeOutlined style={{ fontSize: '36px' }} />
            </Col>
            <Col span={12}>
               <span><strong>Mask compliance:</strong></span>
               <div style={{color:'blue'}}><strong>No</strong></div>
            </Col>
         </Row>
        </Col>
    </>
  )
}

export default SideContentDallas
