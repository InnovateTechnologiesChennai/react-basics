import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Accordionbt = () => {
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is HTML ?</Accordion.Header>
          <Accordion.Body>
            HyperText Markup Language is the standard markup language for
            documents designed to be displayed in a web browser. It defines the
            content and structure of web content. It is often assisted by
            technologies such as Cascading Style Sheets and scripting languages
            such as JavaScript.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Accordionbt;
