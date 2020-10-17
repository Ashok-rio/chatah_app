import React from 'react';
import { Input} from 'reactstrap';
import { AiOutlinePaperClip } from "react-icons/ai";
import sent from "../../../../assets/sent.webp";

const  MobInput = () => {
    return (
        <React.Fragment>
            <span className={"mobile-input-container"}>
          <Input type={"textarea"} />
          <div style={{ marginLeft: "0px", padding: "5px" }}>
            <AiOutlinePaperClip size={"25px"} color={"grey"} />
            <hr />
            <img className={"sentIcon"} src={sent} alt={""} />
          </div>
        </span>
        </React.Fragment>
    )
}

export default MobInput
