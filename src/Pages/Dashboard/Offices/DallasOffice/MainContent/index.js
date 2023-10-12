import { Col, Row, Progress, Space, Slider, Tag, Select,} from "antd";
import React,{useState} from "react";
import SideContentDallas from "../SideContent";



 const handleChange = (value) => {
   console.log(`selected ${value}`);
 };

function MainContentDallas() {
   const [value1, setValue1] = useState(38);
   const [value2, setValue2] = useState(30);

   const onChange1 = (newValue) => {
      setValue1(newValue);
    };
  
    const onAfterChange1 = (newValue) => {
      console.log('onAfterChange: ', newValue);
    };
  
    const onChange2 = (newValue) => {
      setValue2(newValue);
    };
  
    const onAfterChange2 = (newValue) => {
      console.log('onAfterChange: ', newValue);
    };

   const customStyle = {
      width: '100%', 
      height: '0', 
    }

const customStyleCol = {
      backgroundColor: 'white', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '3%', 
      paddingLeft:"20px"
};


const conicColors = {
      '0%': '#ffe58f',
      '50%': '#ffe58f',
      '100%': '#ffe58f',
};
return (
  <>
    <Row gutter={[16,8]}>
        <Col span={13} style={customStyleCol}>
         <div><h1>Forecast & recommendations</h1></div>
         <div><strong>Currently recommended occupancy:</strong></div>
         <Row>
          <Col span={2}>
            <span style={{fontSize:"25px"}}><strong>39%</strong></span>
          </Col>
          <Col span={3} style={{marginTop:"10px"}}>
            <span>37 people</span>
          </Col>
         </Row>
         <Progress percent={39} size={[300, 20]}  strokeWidth={15}/>
         <Row>
         <Col span={18}>
         <div><strong>Occupancy targets:</strong></div>
         </Col>
         <Col span={6}>
         <Space wrap>
            <Tag>75</Tag>
         <Select
          defaultValue="People"
          style={{width: 120,}}
          onChange={handleChange}
          options={[
        {
          value: 'AI',
          label: 'AI',
        },
        {
          value: 'People',
          label: 'People',
        },
        {
          value: 'Omnics',
          label: 'Omnics',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />
    </Space>
         </Col>
         </Row>
         <Row> 
         <Col span={8}>
            <div className="circleTargets"><strong>4 Weeks</strong></div>
         <Progress type="dashboard" percent={80}strokeColor={conicColors} 
          format={percent => (
            <div>
                 <div>
                  <div style={{ fontSize: '22px' }}> <strong>Possible</strong></div>
                  <br/>
                 <div style={{ fontSize: '20px' }}>{percent}%</div>
                 </div>
           </div>)} />
         </Col>
         <Col span={8}>
            <div className="circleTargets"><strong>8 Weeks</strong></div>
            <Progress
               type="circle"
               percent={88}
               success={{percent:88}}
               format={percent => (
             <div>
                  <div>
                   <div style={{ fontSize: '28px' }}><strong>Likely</strong> </div>
                   <br/>
                  <div style={{ fontSize: '20px' }}>{percent}%</div>
                  </div>
            </div>
           )}/>
         </Col>
         <Col span={8}>
            <div className="circleTargets"><strong>12 Weeks</strong></div>
            <Progress
               type="circle"
               percent={95}
               success={{percent:95}}
               format={percent => (
             <div>
                  <div>
                   <div style={{ fontSize: '28px' }}><strong>Yes</strong> </div>
                   <br/>
                  <div style={{ fontSize: '20px' }}>{percent}%</div>
                  </div>
            </div>
           )}/>
         </Col>
         </Row>
         <br />
         <div><strong>Maximum recommended occupancy for vaccination rate and mask compliance rate:</strong></div>
         <br />
         <Row>
         <Col span={12}>
         <span>Employees vaccinated:</span>
         </Col>
         <Col span={12} style={{display:'flex', justifyContent:"space-around" }}>
         <span>{`${value1}% (34 people)`}</span>
         </Col>
         </Row>
         <Slider defaultValue={38} onChange={onChange1} onAfterChange={onAfterChange1} style={customStyle} trackStyle={{height:8}} 
         railStyle={{ backgroundColor: 'lightgray', height:8 }}/>
         <h5>Current vaccination rate 10%(9 people)</h5>
         <Row>
         <Col span={12}>
         <span>Employees using masks:</span>
         </Col>
         <Col span={12} style={{display:'flex', justifyContent:"space-around" }}>
         <span>{`${value2}% (26 people)`}</span>
         </Col>
         </Row>
         <Slider defaultValue={30} onChange={onChange2} onAfterChange={onAfterChange2} style={customStyle} trackStyle={{height:8}} 
         railStyle={{ backgroundColor: 'lightgray', height:8 }}/>
         <span>Current recommended occupancy would be <strong>47%(45 people)</strong> if your vaccination rate was <strong>38%</strong> and your mask compliance rate was <strong>30%</strong></span>
        </Col>
        <Col/>
        <SideContentDallas/>
    </Row>

  </>
)
}

export default MainContentDallas;
