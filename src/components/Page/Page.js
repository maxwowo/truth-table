import React from "react";
import Cockpit from "../Cockpit/Cockpit";
import TruthTable from "../TruthTable/TruthTable";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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

    <Modal isOpen={props.modal} toggle={props.onModalClicked}>
      <ModalHeader toggle={props.onModalClicked}>Help</ModalHeader>
      <ModalBody>
        <p>Enter an expression in the input box to get started.</p>
        <p>Available operators:</p>
        <ul>
          <li>Negation: !</li>
          <li>And: &&</li>
          <li>Or: ||</li>
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="outline-secondary" onClick={props.onModalClicked}>
          Dismiss
        </Button>
      </ModalFooter>
    </Modal>

    <FontAwesomeIcon
      onClick={props.onModalClicked}
      icon={faQuestionCircle}
      className={styles.helpIcon}
    />
    <FontAwesomeIcon
      onClick={() => window.open("https://github.com/maxwowo", "_blank")}
      icon={faGithub}
      className={styles.githubIcon}
    />
  </div>
);

export default Page;
