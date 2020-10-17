import React from "react";
import { Container, Row } from "reactstrap";
import "./css/chat.css";
import clarifyData from "./data/clarifiyData.json";
import Answer from "./components/Answer";
import Comment from "./components/Comment";
import Clarify from "./components/Clarify";
import WebInput from "./components/Input/WebInput";
import MobInput from "./components/Input/MobInput";
import Header from "./components/Header/Header";

const Chat = () => {

  const [width] = React.useState(window.innerWidth);

  const messages = clarifyData;


  const clarifyRender = () => {
    return messages.map((data, i) => {
      return (
        <React.Fragment key={i}>
          <Container  className={"clarify-outer-container"}>
            <Clarify clarify={data} type={"main"} />

            {data.comments.map((x, i) => {
              return (
                <React.Fragment key={i}>
                  {x.type === "answer" && (
                    <React.Fragment>
                      <Answer answer={x} left={"0px"} />

                      {x.comments &&
                        x.comments.map((z, i) => {
                          return (
                            <React.Fragment key={i}>
                              {z.type === "clarify" && (
                                <Clarify clarify={z} type={"nested"} />
                              )}

                              {z.type === "comment" && (
                                <Comment comment={z} left={"20px"} />
                              )}
                              {z.type === "answer" && (
                                <Answer answer={z} left={"20px"} />
                              )}
                            </React.Fragment>
                          );
                        })}
                    </React.Fragment>
                  )}
                  {x.type === "comment" && (
                    <React.Fragment>
                      <Comment comment={x} left={"0px"} />
                      {x.comments.map((y, i) => {
                        return <Comment key={i} comment={y} left={"20px"} />;
                      })}
                    </React.Fragment>
                  )}
                </React.Fragment>
              );
            })}
          </Container>
        </React.Fragment>
      );
    });
  };

  return (
    <React.Fragment>
      {width < 500 && <MobInput />}
      <Container>
        <Row className={width < 500 ? "row-header-mobile" : "row-header-web"}>
          <Header />
          {width > 500 && <WebInput />}
        </Row>
        <br />
        <Row className={width < 500 ? "clarify-row-mob" : "clarify-row-web"}>
          {clarifyRender()}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Chat;
