import React from "react";
import Cockpit from "../Cockpit/Cockpit";
import TruthTable from "../TruthTable/TruthTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "./Page.module.css";

const Page = props => (
  <div className={styles.page}>
    <Cockpit
      onInputChanged={props.onInputChanged}
      onKeyPress={props.onKeyPress}
    />

    {props.showTable ? (
      <TruthTable content={props.content} head={props.head} />
    ) : null}

    <FontAwesomeIcon icon={faQuestionCircle} className={styles.helpIcon} />
    <FontAwesomeIcon
      onClick={() => window.open("https://github.com/maxwowo", "_blank")}
      icon={faGithub}
      className={styles.githubIcon}
    />
  </div>
);

export default Page;
