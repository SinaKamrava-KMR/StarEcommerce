import { createContext } from "react";
import PropTypes from "prop-types";

StarForm.propTypes = {
  children: PropTypes.node,
};

const FormContext = createContext();

function StarForm({ children }) {
  


  return <FormContext.Provider>{children}</FormContext.Provider>;
}

export default StarForm;
