import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faJs,
  faReact,
  faPython,
  faCss3Alt,
  faNode,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import FlaskIcon from "../assets/icons/flask.svg?react";
import SqlIcon from "../assets/icons/sql-database-generic.svg?react";

const SkillSet = () => {
  return (
    <div className="skillSet">
      <h3>Skill Set</h3>
      <p>
        JavaScript <FontAwesomeIcon icon={faJs} className="icon jsIcon" />
      </p>
      <p>
        Python <FontAwesomeIcon icon={faPython} className="icon pythonIcon" />
      </p>

      <p>
        Flask <FlaskIcon className="flaskIcon icon" />
      </p>

      <p>
        Node <FontAwesomeIcon icon={faNode} className="icon nodeIcon" />
      </p>
      <p>
        React <FontAwesomeIcon icon={faReact} className="icon reactIcon" />
      </p>
      <p>
        SQL <SqlIcon className="sqlIcon icon" />
      </p>
      <p>
        HTML <FontAwesomeIcon icon={faHtml5} className="icon htmlIcon" />
      </p>
      <p>
        CSS <FontAwesomeIcon icon={faCss3Alt} className="icon cssIcon" />
      </p>
      {/* add logos next to skills? */}
    </div>
  );
};
export default SkillSet;
