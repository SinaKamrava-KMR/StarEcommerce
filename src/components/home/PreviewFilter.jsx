import { useSelector } from "react-redux";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const SubcategoryWrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid #cbcbcb;
  border-radius: 0.4rem;
  padding: 0.2rem 1rem;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#3a3a3a" : "#fff")};
  color: ${(props) => (props.active ? "#ffffff " : "#393939")};
`;

function PreviewFilter({ onChange }) {
  const subcategories = useSelector((state) => state.categories.subcategories);
  const [selectedId, setSelectedId] = useState(null);

  const handleChange = (id) => {
    if (id === selectedId) {
      setSelectedId("");
    } else {
      setSelectedId(id);
    }
  };

  useEffect(() => {
    if (selectedId !== null) {
      onChange(selectedId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId]);

  return (
    <Wrapper>
      {subcategories.map(
        (item, i) =>
          !(i > 3) && (
            <SubcategoryWrapper
              active={selectedId === item?._id}
              onClick={() => handleChange(item?._id)}
              key={item?._id}
            >
              <p>{item.name}</p>
            </SubcategoryWrapper>
          )
      )}
    </Wrapper>
  );
}

PreviewFilter.propTypes = {
  onChange: PropTypes.func,
};
export default PreviewFilter;
