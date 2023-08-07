import styled from "@emotion/styled";
import Filter from "../../common/Filter";
import FolderIcon from "@mui/icons-material/Folder";
import { Box } from "@material-ui/core";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
const categoryItems = [
  {
    label: "لباس کودک",
    count: 4,
   
  },
  {
    label: "لباس زنانه",
    count: 12,
  
  },
];


const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap:"1rem"
})
function FilterBox() {
  function handleClick(item) {
    console.log(item);
  }
  return (
    <Wrapper>
      <Filter delay={".1"} label="دسته بندی ها" onClick={handleClick} items={categoryItems}>
        <FolderIcon />
      </Filter>
      <Filter delay={".2"} label="بازه زمانی" onClick={handleClick} items={categoryItems}>
        <WatchLaterIcon />
      </Filter>
    </Wrapper>
  );
}

export default FilterBox;
