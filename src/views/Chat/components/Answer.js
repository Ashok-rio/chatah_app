import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import ClarifyIcon from "../../../assets/clarify.png";
import CommentIcom from "../../../assets/comment.png";
import EditIcon from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import { GlobalContext } from "../../../services/GlobalContext";

const Answer = props => {
  const { answer, left } = props;
  const teacherImage = "https://bit.ly/370mw65";

  const [width] = React.useState(window.innerWidth);
  const [state] = useContext(GlobalContext);
  const { userType } = state;

  const optionRender = data => {
    switch (userType) {
      case "Teacher":
        return (
          <React.Fragment>
            {width < 500 ? (
              <React.Fragment>
                <img
                  className={"option-btn editIcon"}
                  src={EditIcon}
                  alt={"edit"}
                />
                <img className={"option-btn"} src={deleteIcon} alt={"delete"} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <a className={"option-btn"} href={"/"}>
                  Edit
                </a>
                <a className={"option-btn"} href={"/"}>
                  Delete
                </a>
              </React.Fragment>
            )}
          </React.Fragment>
        );

      case "Student":
        return (
          <React.Fragment>
            {width < 500 ? (
              <React.Fragment>
                <img
                  className={"option-btn"}
                  src={ClarifyIcon}
                  alt={"clarify"}
                />
                <img
                  className={"option-btn"}
                  src={CommentIcom}
                  alt={"comment"}
                />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <a className={"option-btn"} href={"/"}>
                  Clarify
                </a>
                <a className={"option-btn"} href={"/"}>
                  Comment
                </a>
              </React.Fragment>
            )}
          </React.Fragment>
        );
        default : return <></>
    }
  };
  return (
    <React.Fragment>
      <Row
        style={{
          marginTop: "20px",
          marginLeft: left,
        }}
      >
        <Col lg={12}>
          <Row>
            <Col lg={12} style={{ display: "inline-flex" }}>
              <img
                src={teacherImage}
                alt={""}
                className={"user-circle-image"}
              />
              <div style={{ paddingLeft: "20px" }}>
                <p>
                  <span className={"user-name"}>{answer.createdBy.name}</span>{" "}
                  <br />
                  <span className={"messageTag"} style={{ color: "green" }}>
                    Answer for clarification -{" "}
                    <span className={"messageTime"} style={{ color: "black" }}>
                      {answer.createdBy.date}
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
                  style={{
                    borderRight: "5px solid green",
                  }}
                ></Col>
                <Col md={11} xs={10}>
                  <div
                    style={{
                      fontWeight: "600",
                      padding: "10px",
                    }}
                  >
                    {answer.content}
                  </div>
                </Col>
              </Row>
              <span style={{ float: "right" }}>{optionRender(answer)}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Answer;
