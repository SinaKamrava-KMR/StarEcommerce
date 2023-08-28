import { useState } from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const SelectWrapper = styled.div`
  position: relative;
  width: 90px;
  @media (min-width: 600px) {
    width: 100px;
  }
  @media (min-width: 1000px) {
    width: 110px;
  }
  background-color: #fff;
`;

const SelectLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  cursor: pointer;
  transform: translateY(-50%);
  font-size: 1.4rem;
  color: #333;
  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1000px) {
    font-size: 1.8rem !important;
  }
`;

const SelectArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 4px 0 4px;
  border-color: #333 transparent transparent transparent;
`;

const SelectOptions = styled.ul`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1;
`;

const SelectOption = styled.li`
  padding: 8px;
  font-size: 14px;
  color: #333;
  background-color: #fbfbfb;
  cursor: pointer;

  white-space: nowrap;
  font-weight: 500;
  transition: scale 0.1s ease-in;
  &:hover {
    font-weight: bold;
    scale: 1.1;
  }
`;

NavSelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

function NavSelect({ label, options = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    navigate(`/products?category=${option.value}`);
    setIsOpen(false);
  };

  return (
    <SelectWrapper>
      <SelectLabel onClick={() => setIsOpen((is) => !is)}>{label}</SelectLabel>
      <SelectArrow />
      {isOpen && (
        <SelectOptions onMouseLeave={() => setIsOpen((is) => !is)}>
          {options.map(
            (option, i) =>
              i < 4 && (
                <SelectOption
                  as={motion.li}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: `.${i}` }}
                  key={option.value}
                  onClick={() => handleSelect(option)}
                >
                  {option.label}
                </SelectOption>
              )
          )}
        </SelectOptions>
      )}
    </SelectWrapper>
  );
}

export default NavSelect;
