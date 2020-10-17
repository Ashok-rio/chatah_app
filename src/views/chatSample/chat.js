import React  from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";
import Comment from '../../assets/comment.png';
import Answer from '../../assets/answer.png';
import Agree from '../../assets/agree.png';
import deleteIcon from '../../assets/delete.png';
import edit from '../../assets/edit.png';
import sent from '../../assets/sent.webp';
import {AiOutlinePaperClip} from 'react-icons/ai';
import './chat.css';

const Student = () => {
  const [width] = React.useState (window.innerWidth);
  const studentImage = "https://bit.ly/315GQPy";
  const teacherImage = "https://bit.ly/370mw65";
  return (
    <React.Fragment>
      {width < 500 ? <span className={"mobile-input-container"}>
        <Input type={"textarea"} />
        <div style={{marginLeft:"0px",padding:"5px"}}>
          <AiOutlinePaperClip size={"25px"} color={"grey"} />
          <hr />
        <img src={sent} alt={''} style={{width:"35px",height:"35px"}} className={"sentIcon"} />
        </div>
        
        </span> : null}
      
      <Container>
        <Row style={ width < 500?{ position:"fixed",width:"100%",height:"100px",verticalAlign:"baseline",padding: "20px",zIndex:"10",background:"#ffffff"}:{ position:"fixed",width:"60%",height:"180px",verticalAlign:"baseline",padding: "20px",zIndex:"10",background:"#ffffff"}}>
          <Col lg={12} style={{position:"relative",top:"10%", textAlign: "center",bottom:"20px" }}>
            <h4>XII - B - Physics</h4>
  <p>Interactions</p>
          </Col>
          { width < 500? null :  
          <Col lg={12} style={{position:"relative",top:"10%", textAlign: "center", width:"100%",display:"inline-flex",marginBottom:"50px" }}>
          <Input type={"textarea"} style={{borderRadius:"0px",borderRight:"none"}} /> 
          <Button style={{borderRadius:"0px",background:"#f7f7f7",border:"none",borderTop:"1px solid #ced4da",borderBottom:"1px solid #ced4da"}}>
            <AiOutlinePaperClip color={"grey"} size={"25px"} />
            </Button>
          <Button style={{borderRadius:"0px",background:"#f7f7f7",border:"none",borderTop:"1px solid #ced4da",borderBottom:"1px solid #ced4da",borderRight:"1px solid #ced4da"}}>
            {/* <FaPaperPlane color={"grey"} size={"20px"} /> */}
            <img src={sent} alt={''} style={{width:"30px",height:"30px"}} className={"sentIcon"} />
          </Button>
          </Col>}
          
        </Row>
        <br />
        

        <Row style={width < 500 ? { marginTop: "100px", padding: "0px" } :{ marginTop: "180px", padding: "0px" }}>
          <Container
          className={"clarify-outer-container"}
          >
            {/* first-clarify */}
            <Row>
              <Col lg={12}>
                <Row
                className={"clarify-inner-container"}
                 
                >
                  <Col
                    lg={12}
                    style={{
                      display: "inline-flex",
                    }}
                  >
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Vanitha
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          Request for clarification -{" "}
                          <span style={{ fontSize: "10px" }}>
                            11/15/2019 3:32:45 PM
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ paddingLeft: "50px" }}>
                      What is meant by Electromaganetic force?
                    </div>
                    {/* <br /> */}
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Clarify} alt={'clarify'}/></a> */}
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={Answer} alt={'answer'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={deleteIcon} alt={'comment'}/></a>
                        
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Answer</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* first-end */}

            <Row style={{ marginTop: "20px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={teacherImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Teacher - Abinaya Sekar
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px", color: "green" }}>
                          Answer for clarification -{" "}
                          <span style={{ fontSize: "10px", color: "black" }}>
                            11/15/2019 3:32:45 PM
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col
                        md={1}
                        xs={2}
                        style={{ borderRight: "5px solid green" }}
                      ></Col>
                      <Col md={11} xs={10}>
                        <div style={{ fontWeight: "600", padding: "10px" }}>
                          The fundamental force associated with electric and
                          magnetic fields. The electromagnetic force is carried
                          by the photon and is responsible for atomic structure,
                          chemical reactions, the attractive and repulsive
                          forces associated with electrical charge and
                          magnetism, and all other electromagnetic phenomena.
                        </div>
                        
                      </Col>
                    </Row>
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Clarify} alt={'clarify'}/></a> */}
                        <a  href={"/"}><img style={{width:'20px',height:'20px', marginLeft: '20px',marginRight: '10px'}} src={edit} alt={'answer'}/></a>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a> */}
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={deleteIcon} alt={'comment'}/></a>
                        
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Answer</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                  
                </Row>
              </Col>
            </Row>
          </Container>

          <Container className={"clarify-outer-container"}>
          <Row style={{ marginTop: "0px",padding: "0px" }}>
              <Col lg={12}>
                <Row
style={{
  paddingTop: "10px",
  paddingBottom: "10px",
  background: "#ffffff",
  // border: "1px solid #d8d8d8",
  borderLeft: "5px solid #ee82ee",
}}
                >
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Jeeva
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px", color: 'brown' }}>
                          Request for clarification -{" "}
                          <span style={{ fontSize: "10px", color: 'black' }}>
                            11/16/2019 2:45:37 PM
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ paddingLeft: "50px" }}>
                      Give some examples of electromagnetic force?
                    </div>
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Answer} alt={'clarify'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={deleteIcon} alt={'answer'}/></a>
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Answer</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Kowsalya Vijay
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          Commented On -{" "}
                          <span style={{ fontSize: "10px" }}>
                            11/16/2019 2:45:37 PM
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ paddingLeft: "50px" }}>light.</div>
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Agree} alt={'clarify'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={deleteIcon} alt={'answer'}/></a>
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Agree</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={width < 500 ? { marginTop: "20px",marginLeft:"0px" }:{ marginTop: "20px",marginLeft:"20px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Renukadevi{" "}
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          Commented On -{" "}
                          <span style={{ fontSize: "10px" }}>
                            11/16/2019 2:45:37 PM
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ paddingLeft: "50px" }}>Generators.</div>
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Agree} alt={'clarify'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={deleteIcon} alt={'answer'}/></a>
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Agree</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={width < 500 ? { marginTop: "20px",marginLeft:"10px" }:{ marginTop: "20px",marginLeft:"20px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Vanitha
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          Agree with the Comment -{" "}
                          <span style={{ fontSize: "10px" }}>
                            11/16/2019 2:45:37 PM
                          </span>
                        </span>
                      </p>
                    
                    </div>
                  </Col>
                  <Col lg={12}>
                    {/* <div style={{ paddingLeft: "50px" }}>light.</div> */}
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Answer} alt={'clarify'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={deleteIcon} alt={'answer'}/></a>
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Answer</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={{ marginTop: "20px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={teacherImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Teacher - Abinaya Sekar
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px", color: "green" }}>
                          Answer for clarification -{" "}
                          <span style={{ fontSize: "10px", color: "black" }}>
                            11/15/2019 3:32:45 PM
                          </span>
                        </span>
                      </p>
                     
                    </div>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col
                        md={1}
                        xs={2}
                        style={{ borderRight: "5px solid green" }}
                      ></Col>
                      <Col md={11} xs={10}>
                        <div style={{ fontWeight: "600", padding: "10px" }}>
                          Both are correct. I explain you in a detailed manner.
                          Light is an electromagnetic wave, where an oscillating
                          electric field generates a changing magnetic field,
                          which in turn creates an electric field, and so on.
                          Electrical generators work by a spinning magnetic
                          field creating a current in a nearby wire. Other
                          example like Electromagnetism is also responsible for
                          the electricity powering your screen and the device
                          you're reading on, with the flow of electrons
                          propelled
                          energy.
                        </div>
                        <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        <a  href={"/"}><img style={{width:'20px',height:'20px', marginLeft: '20px'}} src={edit} alt={'clarify'}/></a>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comm} alt={'comment'}/></a> */}
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={deleteIcon} alt={'answer'}/></a>
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Edit</a>
                        {/* <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a> */}
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={{ marginTop: "20px",padding: "0px 0px 0px 15px" }}>
              <Col lg={12}>
                <Row
                  style={{
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    background: "#ffffff",
                    // border: "1px solid #d8d8d8",
                    borderLeft: "5px solid brown",
                  }}
                >
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Jansirani
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px", color: 'brown' }}>
                          Request for clarification -{" "}
                          <span style={{ fontSize: "10px", color: 'black' }}>
                            11/16/2019 2:45:37 PM
                          </span>
                        </span>
                      </p>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ paddingLeft: "50px" }}>
                      Is there any difference between electromagnetic force & electromagnetism
                    </div>
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Clarify} alt={'clarify'}/></a> */}
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={Answer} alt={'answer'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={deleteIcon} alt={'comment'}/></a>
                        
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Answer</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={width < 500 ?{ marginTop: "20px" } :{ marginTop: "20px", marginLeft:"30px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={studentImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Vanitha
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px" }}>
                          Commented On -{" "}
                          <span style={{ fontSize: "10px" }}>
                            11/16/2019 2:45:37 PM
                          </span>
                        </span>
                      </p>
                      
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div style={{ paddingLeft: "50px" }}>
                      There is no difference between them.
                    </div>
                    <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Clarify} alt={'clarify'}/></a> */}
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={Agree} alt={'answer'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={Comment} alt={'comment'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={deleteIcon} alt={'comment'}/></a>
                        
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Agree</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row style={ width < 500 ?{ marginTop: "20px" } :{ marginTop: "20px", marginLeft:"30px" }}>
              <Col lg={12}>
                <Row>
                  <Col lg={12} style={{ display: "inline-flex" }}>
                    <img
                      src={teacherImage}
                      alt={""}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    />
                    <div style={{ paddingLeft: "20px" }}>
                      <p>
                        <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                          Teacher - Abinaya Sekar
                        </span>{" "}
                        <br />
                        <span style={{ fontSize: "12px", color: "green" }}>
                          Answer for clarification -{" "}
                          <span style={{ fontSize: "10px", color: "black" }}>
                            11/15/2019 3:32:45 PM
                          </span>
                        </span>
                      </p>
                      
                    </div>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col
                        md={1}
                        xs={2}
                        style={{ borderRight: "5px solid green" }}
                      ></Col>
                      <Col md={11} xs={10}>
                        <div style={{ fontWeight: "600", padding: "10px" }}>
                        Jansirani answer is wrong.
                         Electromagnetism is a branch of physics that involvesthe study of electromagnetic force.
                         It is a type of interaction that occurs between electrically charged particles.
                        </div>
                        <span style={{float:"right"}}>
                      {width < 500 ? 
                      <React.Fragment>
                        <a  href={"/"}><img style={{width:'20px',height:'20px', marginLeft: '20px'}} src={edit} alt={'clarify'}/></a>
                        <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px'}} src={deleteIcon} alt={'comment'}/></a>
                        {/* <a  href={"/"}><img style={{width:'15px',height:'15px', marginLeft: '20px',marginRight: '10px'}} src={Answer} alt={'answer'}/></a> */}
                      </React.Fragment>:
                      <React.Fragment>
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Edit</a>
                        {/* <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Comment</a> */}
                        <a style={{width:'15px',height:'15px', marginLeft: '20px',fontSize:'13px'}} href={"/"}>Delete</a>
                        </React.Fragment>
                      }
                      
                      </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>


          </Container> 
          
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Student;
