import React, { useContext } from "react";
import PropTypes from "prop-types";
import AlertContext from "../context/alert/alertContext";

function Alert(props) {
  const alertContext = useContext(AlertContext);
  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        {alert.msg}
      </div>
    ))
  );
}

Alert.propTypes = {};

export default Alert;
