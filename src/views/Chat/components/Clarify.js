import React, { useContext } from "react";
import { Row, Col } from "reactstrap";
import CommentIcom from "../../../assets/comment.png";
import AnswerIcon from "../../../assets/answer.png";
import AgreeIcon from "../../../assets/agree.png";
import EditIcon from "../../../assets/edit.png";
import deleteIcon from "../../../assets/delete.png";
import { GlobalContext } from "../../../services/GlobalContext";

const Clarify = props => {
  const studentImage = "https://bit.ly/315GQPy";
  const { clarify, type } = props;
  const [width] = React.useState(window.innerWidth);
  const [state] = useContext(GlobalContext);
  const { userType, userId } = state;

  const optionRender = data => {
    switch (userType) {
      case "Teacher":
        return (
          <React.Fragment>
            {width < 500 ? (
              <React.Fragment>
                <img className={"option-btn"} src={AnswerIcon} alt={"answer"} />
                <img
                  className={"option-btn"}
                  src={CommentIcom}
                  alt={"comment"}
                />
                <img className={"option-btn"} src={deleteIcon} alt={"delete"} />
              </React.Fragment>
            ) : (
              <React.Fragment>
                <a className={"option-btn"} href={"/"}>
                  Answer
                </a>
                <a className={"option-btn"} href={"/"}>
                  Comment
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
                {clarify.createdBy._id === userId ? (
                  <React.Fragment>
                    <img
                      className={"option-btn editIcon"}
                      src={EditIcon}
                      alt={"edit"}
                    />
                    <img
                      className={"option-btn"}
                      src={deleteIcon}
                      alt={"delete"}
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <img
                      className={"option-btn"}
                      src={AgreeIcon}
                      alt={"agree"}
                    />
                    <img
                      className={"option-btn"}
                      src={CommentIcom}
                      alt={"comment"}
                    />
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <React.Fragment>
                {clarify.createdBy._id === userId ? (
                  <React.Fragment>
                    <a className={"option-btn"} href={"/"}>
                      Edit
                    </a>
                    <a className={"option-btn"} href={"/"}>
                      Delete
                    </a>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <a className={"option-btn"} href={"/"}>
                      Agree
                    </a>
                    <a className={"option-btn"} href={"/"}>
                      Comment
                    </a>
                  </React.Fragment>
                )}
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
        style={
          type === "nested"
            ? {
                marginTop: "20px",
                padding: "0px 0px 0px 15px",
              }
            : {
                marginTop: "0px",
                padding: "0px 0px 0px 0px",
              }
        }
      >
        <Col lg={12}>
          <Row
            className={
              type === "nested"
                ? "nested-clarify-inner-container"
                : "clarify-inner-container"
            }
          >
            <Col lg={12} style={{ display: "inline-flex" }}>
              <img
                src={studentImage}
                alt={""}
                className={"user-circle-image"}
              />
              <div style={{ paddingLeft: "20px" }}>
                <p>
                  <span className={"user-name"}>{clarify.createdBy.name}</span>{" "}
                  <br />
                  <span className={"messageTag clarifiyTag"}>
                    Request for clarification -{" "}
                    <span className={"messageTime clarifiyTime"}>
                      {clarify.createdBy.date}
                    </span>
                  </span>
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <div style={{ paddingLeft: "50px" }}>{clarify.content}</div>
              <span style={{ float: "right" }}>{optionRender(clarify)}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Clarify;
