import React,{useEffect, useState} from 'react'
import classes from "../register.module.scss";
import QueueAnim from 'rc-queue-anim';
import developer from "../images/developer.jpg"
import axios from "axios";
import { Col, Row, Input, Button} from "antd";


export default function Hachathon() {

   const [teamName,setTeamName] = useState("");
   const [teamSize,setteamSize] = useState("");
   const [participants,setParticipants] = useState([]);
   const [email,setEmail] = useState("");
   const [contact,setContact] = useState("");
   const [transNumber,setTransNumber] = useState("");
   const [error, setError] = useState(false)


    const SubmitHandler = () =>{
   
        const data = {
            teamName,
            sizeOfTeam: teamSize,
            participants,
            emailID:email,
            contactNumber:contact,
            transactionId:transNumber
        }

       const showError = (error)=>{
        setError(error)
        // To remove error after 3 sec 
        setTimeout(()=>{
            setError(false)
        }, 3000)
       }
        

        axios.post("https://techathlon21.herokuapp.com/registerHackathon",data).then(response => {
            console.log(response);

            if(!response.data.done){
                console.log("helo")
                showError(response.data.error.details[0].message)

            }   
        }).catch(e => console.log(e.details ,"error"))
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
    };

    const onSubDataChange = (index,type,e)=>{

        let updatedParticipants = participants;
       
        updatedParticipants[index][type] = e.target.value;
        // console.log(index, updatedParticipants,type)

        setParticipants(updatedParticipants);
    }

   const initialArray=(teamSize)=>{
       let updatedParticipants=[]
    for (var i = 0; i < teamSize; i++) {
        updatedParticipants.push({name:"" , college:"" ,year:"" ,branch:"" ,githubID:""});
    }

    setParticipants(updatedParticipants)
   }

    var sub = [];
    for (var i = 1; i <= teamSize; i++) {
        sub.push(i);
    }
    var subTeam = sub?.map((element , index) => {
        return (
            <center key ={index}>
        <div className={classes.subTeam}>
        <p className={classes.subtitle}>Participant {element} : </p>  
        <div style={{flex:'2',width:'100%'}}>

            <div key="1" className={classes.formField}>
                <p className={classes.title}>Full Name</p>
                <Input
                    type='text'
                    onChange={(e)=>onSubDataChange(index,"name",e)}
                    className={`${classes.inputField}`}
                    placeholder='Enter Name'
                />
            </div>


            <div key="2" className={classes.formField}>
                <p className={classes.title}>College</p>
                <Input
                    type='text'
                    onChange={(e)=>onSubDataChange(index,"college",e)}
                    className={classes.inputField}
                    placeholder='Enter College'
                />
            </div>       


            <div key="3" className={classes.formField}>
                <p className={classes.title}>Year & Branch</p>
                <span className={classes.nestedInput}>
                <Input
                    type='text'
                    onChange={(e)=>onSubDataChange(index,"year",e)}
                    className={`${classes.inputField} ${classes.in}`}
                    placeholder='Enter Year'
                />
                <Input
                    type='text'
                    onChange={(e)=>onSubDataChange(index,"branch",e)}
                    className={`${classes.inputField} ${classes.in}`}
                    placeholder='Enter Branch'
                />
                </span>
            </div>


            <div key="4" className={classes.formField}>
                <p className={classes.title}>Github Id</p>
                <Input
                    type='text'
                    onChange={(e)=>onSubDataChange(index,"githubID",e)}
                    className={classes.inputField}
                    placeholder='Enter Github ID'
                />
            </div>  


        </div>
        </div>
        </center>
        );
    });

    return (
        <Row justify="center" >
            
        <Col lg={8} sm={16} xs={23}>
            
            <div className={classes.body}>
                <Row className={classes.formBox}>
                    <div className={classes.header}>
                        <h3 className={classes.headerText}>Register for Hackathon</h3>
                        <img src={developer} className={classes.headerImage} alt="developer" />
                    </div>

                {/* animation */}
                    <div className={classes.fieldsBox}>
                    <QueueAnim delay={300} className="queue-simple">
                        <div key='a' className={classes.formField}>
                            <p className={classes.title}>Team Name</p>
                            <Input
                                type='text'
                                value={teamName}
                                onChange={(e) => onChangeHandler(e,"teamName")}
                                className={classes.inputField}
                                placeholder='Enter your Team Name'
                            />
                        </div>
                        <div key='c' className={classes.formField}>
                            <p className={classes.title}>Number of Members in Team</p>
                            <Input
                                type='text'
                                value={teamSize}
                                onChange={(e) => onChangeHandler(e,"teamSize")}
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
                                onChange={(e) => onChangeHandler(e,"email")}
                                placeholder='Enter your Email'
                            />
                        </div>

                        <div key='e' className={classes.formField}>
                            <p className={classes.title}>Contact Number</p>
                            <Input
                                type='text'
                                value={contact}
                                className={classes.inputField}
                                onChange={(e) => onChangeHandler(e,"contact")}
                                placeholder='Enter Contact Number'
                            />
                        </div>

                        <div key='f' className={classes.formField}>
                            <p className={classes.title}>Transaction ID</p>
                            <Input
                                type='text'
                                value={transNumber}
                                className={classes.inputField}
                                onChange={(e) => onChangeHandler(e,"transNumber")}
                                placeholder='Enter Transaction Number'
                            />
                        </div>
                        <Button onClick={()=> SubmitHandler()} key = 'z' block className={classes.Button} >Register Now</Button>
                         {error && <div className={classes.errorNotification}>
                             <p style={{color:"white", fontSize:"13px",flexWrap: "wrap",margin:'0 6px'}}>{error}</p>
                             <p style={{color:"white",zIndex:"10", cursor:"pointer"}} onClick={()=>setError(false)} >X</p>
                             </div>}

                        </QueueAnim>
                            <br /><br />
                        </div>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}
