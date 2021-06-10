import React, { useState } from 'react'
import classes from "../register.module.scss";
import QueueAnim from 'rc-queue-anim';
import axios from "axios";
import { Col, Row, Input, Button } from "antd";

export default function CTF() {



    const [teamName, setTeamName] = useState("");
    const [teamSize, setteamSize] = useState("");
    const [participants, setParticipants] = useState([]);
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [transNumber, setTransNumber] = useState("");
    const [utrNumber, setUtrNumber] = useState("");
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [apiMessage, setApiMessage] = useState('')



    const SubmitHandler = () => {
        setLoading(true)
        const data = {
            teamName,
            sizeOfTeam: teamSize,
            participants,
            emailID: email,
            contactNumber: contact,
            transactionId: transNumber,
            utrNumber
        }

        axios.post("https://techathlon21.herokuapp.com/registerCaptureTheFlag", data).then(response => {

            if (!response.data.done) {
                setApiMessage(response.data.error.details[0].message)
                setError(true)
                setSuccess(false)
                setLoading(false)

                setTimeout(() => setError(false), 5000)
            }
            else {
                setApiMessage('Your Registration has been recieved. Kindly check your email.')
                setError(false)
                setSuccess(true)
                setLoading(false)

                setTimeout(() => setSuccess(false), 5000)


            }
        }).catch(e => { console.log(e.details, "error"); setLoading(false) })
    }

    const onChangeHandler = (e, type) => {
        if (type === "teamName") {
            setTeamName(e.target.value);
        }
        else if (type === "teamSize") {
            initialArray(e.target.value);
            setteamSize(e.target.value);
        }
        else if (type === "email") {
            setEmail(e.target.value)
        }
        else if (type === "contact") {
            setContact(e.target.value)
        }
        else if (type === "transNumber") {
            setTransNumber(e.target.value)
        }
        else if (type === "utrNumber") {
            setUtrNumber(e.target.value)
        }
    };

    const onSubDataChange = (index, type, e) => {

        let updatedParticipants = participants;

        updatedParticipants[index][type] = e.target.value;
        // console.log(index, updatedParticipants,type)

        setParticipants(updatedParticipants);
    }

    const initialArray = (teamSize) => {
        let updatedParticipants = []
        for (var i = 0; i < teamSize; i++) {
            updatedParticipants.push({ name: "", college: "", year: "", branch: "" });
        }

        setParticipants(updatedParticipants)
    }

    var sub = [];
    for (var i = 1; i <= teamSize; i++) {
        sub.push(i);
    }
    var subTeam = sub?.map((element, index) => {
        return (
            <center key={index}>
                <div className={classes.subTeam}>
                    <p className={classes.subtitle}>Participant {element} : </p>
                    <div style={{ flex: '2', width: '100%' }}>

                        <div key="1" className={classes.formField}>
                            <p className={classes.title}>Full Name</p>
                            <Input
                                type='text'
                                onChange={(e) => onSubDataChange(index, "name", e)}
                                className={`${classes.inputField}`}
                                placeholder='Enter your Name'
                            />
                        </div>


                        <div key="2" className={classes.formField}>
                            <p className={classes.title}>College</p>
                            <Input
                                type='text'
                                onChange={(e) => onSubDataChange(index, "college", e)}
                                className={classes.inputField}
                                placeholder='Enter your College'
                            />
                        </div>


                        <div key="3" className={classes.formField}>
                            <p className={classes.title}>Year & Branch</p>
                            <span className={classes.nestedInput}>
                                <Input
                                    type='text'
                                    onChange={(e) => onSubDataChange(index, "year", e)}
                                    className={`${classes.inputField} ${classes.in}`}
                                    placeholder='Enter your Year'
                                />
                                <Input
                                    type='text'
                                    onChange={(e) => onSubDataChange(index, "branch", e)}
                                    className={`${classes.inputField} ${classes.in}`}
                                    placeholder='Enter your Branch'
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </center>
        );
    });



    return (
        <Row justify="center" >
            <Col lg={8} sm={16} xs={23}>
                {loading ? (<div className={classes.loading}>
                    <div className={classes.uil_ring_css} style={{ transform: 'scale(0.79)' }}>
                        <div />
                    </div>
                </div>) : ''}
                <div className={classes.body}>
                    <Row className={classes.formBox}>
                        <div className={classes.header}>
                            <h3 className={classes.headerText}>Register for Capture The Flag</h3>
                        </div>
                        {/* animation */}
                        <div className={classes.fieldsBox}>
                            <p className={classes.paymentDetails}>
                                Kindly make your payment before filling this form.
                                <br />
                                The Payment Details are as follows:
                                <ul>
                                    <li>Name: INDERPRASTHA ENGINEERING COLLEGE</li>
                                    <li>Bank Name: HDFC BANK LTD.</li>
                                    <li>Address: D-44 RDC, RajNagar, Ghaziabad</li>
                                    <li>Account No: 50100087471211</li>
                                    <li>RTGS/IFSC Code: HDFC0000153</li>
                                </ul>
                            </p>
                            <QueueAnim delay={300} className="queue-simple">
                                <div key='a' className={classes.formField}>
                                    <p className={classes.title}>Team Name</p>
                                    <Input
                                        type='text'
                                        value={teamName}
                                        onChange={(e) => onChangeHandler(e, "teamName")}
                                        className={classes.inputField}
                                        placeholder='Enter your Team Name'
                                    />
                                </div>
                                <div key='c' className={classes.formField}>
                                    <p className={classes.title}>Number of Members in Team</p>
                                    <Input
                                        type='text'
                                        value={teamSize}
                                        onChange={(e) => onChangeHandler(e, "teamSize")}
                                        className={classes.inputField}
                                        placeholder='Enter your Team Size'
                                    />
                                </div>
                                <div>
                                    {subTeam}
                                </div>

                                <div key='d' className={classes.formField}>
                                    <p className={classes.title}>E-Mail ID</p>
                                    <Input
                                        type='email'
                                        value={email}
                                        className={classes.inputField}
                                        onChange={(e) => onChangeHandler(e, "email")}
                                        placeholder='Enter your Email'
                                    />
                                </div>

                                <div key='e' className={classes.formField}>
                                    <p className={classes.title}>Contact Number</p>
                                    <Input
                                        type='text'
                                        value={contact}
                                        className={classes.inputField}
                                        onChange={(e) => onChangeHandler(e, "contact")}
                                        placeholder='Enter Contact Number'
                                    />
                                </div>

                                <div key='f' className={classes.formField}>
                                    <p className={classes.title}>Transaction ID</p>
                                    <Input
                                        type='text'
                                        value={transNumber}
                                        className={classes.inputField}
                                        onChange={(e) => onChangeHandler(e, "transNumber")}
                                        placeholder='Enter Transaction Number'
                                    />
                                </div>
                                <div key='g' className={classes.formField}>
                                    <p className={classes.title}>UTR Number</p>
                                    <Input
                                        type='text'
                                        value={utrNumber}
                                        className={classes.inputField}
                                        onChange={(e) => onChangeHandler(e, "utrNumber")}
                                        placeholder='Enter UTR Number'
                                    />
                                </div>
                                <Button onClick={() => SubmitHandler()} key='z' block className={classes.Button} >Register Now</Button>
                            </QueueAnim>
                            {error && <div className={classes.errorNotification}>
                                <p style={{ color: "white", fontSize: "13px", flexWrap: "wrap", margin: '0 6px' }}>{apiMessage}</p>
                                <p style={{ color: "white", zIndex: "10", cursor: "pointer" }} onClick={() => setError(false)} >X</p>
                            </div>}
                            {success && <div className={classes.successNotification}>
                                <p style={{ color: "white", fontSize: "13px", flexWrap: "wrap", margin: '0 6px' }}>{apiMessage}</p>
                                <p style={{ color: "white", zIndex: "10", cursor: "pointer" }} onClick={() => setSuccess(false)} >X</p>
                            </div>}
                            <br /><br />
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
