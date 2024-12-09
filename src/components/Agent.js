import React from 'react'
import { BrowserRouter as Router,Route,Routes,Link,useParams} from 'react-router-dom';

const Agent = (props) => {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    const { codeName } = useParams();
    const agent = [
      "omakase", "hitachi", "jason", "satoshi", "kitsune", "denson",
      "wilson", "roy", "kennect", "jeffery", "agnes", "zoey",
      "rakun", "rakunb7", "rakun7cm", "wallace", "kunst"
    ];

    if (agent.includes(codeName)) {
      props.setAgentMint(true);
      props.setAgentCodeName(codeName);
      console.log("set code name success:",  codeName);
    } else if (codeName == null || codeName == "") {
      props.setAgentMint(false);
    } else {
      window.location.href = "/";
    }

    return (
      <div></div>
    );
}

export default Agent;
