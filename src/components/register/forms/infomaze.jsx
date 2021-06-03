import React from 'react'
import classes from "../register.module.scss";
import QueueAnim from 'rc-queue-anim';
import quiz from "../images/mind.jpg"
import { Col, Row, Input, Button} from "antd";

export default function Infomaze() {
    return (
        <Row justify="center" >
        <Col lg={8} sm={16} xs={23}>
            <div className={classes.body}>
                <Row className={classes.formBox}>

                    <div className={classes.header}>
                        <h3 className={classes.headerText}>Register for Infomaze</h3>
                        <img src={quiz} className={classes.headerImage} alt="Quiz" />
                    </div>

                {/* animation */}
                    <div className={classes.fieldsBox}>
                    <QueueAnim delay={300} className="queue-simple">
                        <div key='a' className={classes.formField}>
                            <p className={classes.title}>Full Name</p>
                            <span className={classes.nestedInput}>
                            <Input
                                type='text'
                                className={`${classes.inputField} ${classes.in}`}
                                placeholder='Enter your First Name'
                            />
                            <Input
                                type='text'
                                className={`${classes.inputField} ${classes.in}`}
                                placeholder='Enter your Last Name'
                            />
                            </span>
                        </div>

                        {/* <div key='b' className={classes.formField}>
                            <p className={classes.title}>Last Name</p>
                            <Input
                                type='text'
                                className={classes.inputField}
                                placeholder='Enter your Last Name'
                            />
                        </div> */}
                        <div key='c' className={classes.formField}>
                            <p className={classes.title}>mobile number</p>
                            <Input
                                type='number'
                                className={classes.inputField}
                                placeholder='Enter your Mobile Number'
                            />
                        </div>

                        <div key='d' className={classes.formField}>
                            <p className={classes.title}>College</p>
                            <Input
                                type='text'
                                className={classes.inputField}
                                placeholder='Enter your College'
                            />
                        </div>

                        <div key='e' className={classes.formField}>
                            <p className={classes.title}>Github Username</p>
                            <Input
                                type='text'
                                className={classes.inputField}
                                placeholder='Enter Github Username'
                            />
                        </div>
                        <div key='e' className={classes.formField}>
                            <p className={classes.title}>Transaction Number</p>
                            <Input
                                type='text'
                                className={classes.inputField}
                                placeholder='Enter Transaction Number'
                            />
                        </div>
                        <Button key = 'z' block className={classes.Button} >Register Now</Button>
                        </QueueAnim>

                        <br /><br />
                        </div>
                </Row>
            </div>
        </Col>
    </Row>
    )
}
