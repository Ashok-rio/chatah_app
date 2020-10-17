import React from 'react';
import {Col,Button, Input} from 'reactstrap';
import { AiOutlinePaperClip } from "react-icons/ai";
import sent from "../../../../assets/sent.webp";

const  WebInput = () => {
    return (
        <React.Fragment>
            <Col className={"hearer-input-colom"} lg={12}>
              <Input type={"textarea"} className={"hearer-input"} />
              <Button className={"attach-button-web"}>
                <AiOutlinePaperClip color={"grey"} size={"25px"} />
              </Button>
              <Button className={"sent-button-web"}>
                <img
                  src={sent}
                  alt={""}
                  className={"sentIcon sent-button-web-img"}
                />
              </Button>
            </Col>
        </React.Fragment>
    )
}

export default WebInput
