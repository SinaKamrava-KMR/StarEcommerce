import PropTypes from "prop-types";
import { keyframes, styled } from "styled-components";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
Select.propTypes = {
  options: PropTypes.array,
  register: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.string,
  values: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.bool,
  errors: PropTypes.objectOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

const waveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(0);
  }
`;

const SelectStyle = styled.div`
  position: relative;
  flex: 1;
  border: 1px solid ${(props) => (props.error ? "#ff6b6b" : "#c5c5c5")};
  border-radius: 0.4rem;
  padding: 0.5rem;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding-right: 4rem;
  animation-name: ${(props) => (props.error ? waveAnimation : "none")};
  animation-duration: 0.2s;
  animation-timing-function: backwards;
  animation-iteration-count: 2;
`;
const DropdownIcon = styled.div`
  border-radius: 0.4rem;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #d8d8d8;
  &:hover {
    background-color: #f0f0f0;
  }

  & > * {
    transition: all 0.2s ease-in-out;
    transform: ${(props) => (props.isRotate ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: #ffffff;
  top: 110%;
  left: 0;
  right: 0;
  z-index: 5000;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #3333332c;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const DropdownItem = styled.div`
  padding: 0.5rem 0.8rem;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #eaeaea5c;
  }
`;
const DropdownItems = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 125px;
  /* width*/
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #e7e7e79a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #777777;
    border-radius: 10px;
  }
`;
const SearchInput = styled.input`
  border: 0;
  background-color: #f1f1f1bf;
  /* box-shadow: 0 0 7px #41414140 inset; */
  font-size: 1.3rem;
  border-radius: 0.5rem;
  padding: 0.9rem 1rem;
  &:focus {
    outline: 0;
  }
`;

const Label = styled.p`
  color: #b8b8b8;
  font-size: 1.4rem;
`;
const SelectedValue = styled.p`
  color: #5f5f5f;
  font-size: 1.5rem;
`;
const ErrorMessage = styled.small`
  color: #ff6b6b;
  font-size: 1.1rem;
  position: absolute;
  top: 110%;
  right: 1rem;
`;

function Select({ options, label, onChange, value, errors, name }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState({ _id: null, name: null });
  const [filteredOptions, setFilteredOptions] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (selected._id !== null) {
      onChange(selected._id);
      setShowOptions(false);
      setSearch("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (showOptions) {
      if (search !== "") {
        setFilteredOptions((items) =>
          items.filter((option) => option.name.includes(search))
        );
      } else {
        setFilteredOptions(options);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    setFilteredOptions(options);
    if (options.length === 0) {
      setSelected({ _id: null, name: null });
      // onChange(null);
    }
    if (options.length === 0 && value && name === "subcategory") {
      onChange(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <SelectStyle error={errors?.[name] !== undefined}>
      {errors?.[name] && !showOptions && (
        <ErrorMessage
          as={motion.small}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {errors[name].message}
        </ErrorMessage>
      )}
      <DropdownIcon
        isRotate={showOptions}
        onClick={() => setShowOptions((s) => !s)}
      >
        <HiOutlineChevronDown />
      </DropdownIcon>

      {selected?._id === null ? (
        <Label>{label}</Label>
      ) : (
        <SelectedValue>{selected.name}</SelectedValue>
      )}

      {showOptions && (
        <Dropdown
          as={motion.div}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`جستجوی ${label}`}
          />

          <DropdownItems>
            {filteredOptions.map((item) => (
              <DropdownItem
                onClick={() => setSelected({ ...item })}
                key={item?._id}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownItems>
        </Dropdown>
      )}
    </SelectStyle>
  );
}

export default Select;
