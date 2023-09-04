import Mapir from "mapir-react-component";
import { MAP_API_TOKEN } from "../../configs/constants";
import { useState } from "react";
import { styled } from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  max-width: 395px;
  height: 300px;
  overflow:hidden;
  border-radius: 1rem;

`


const Map = Mapir.setToken({
  transformRequest: (url) => {
    return {
      url: url,
      headers: {
        "x-api-key": MAP_API_TOKEN, //Mapir access token
        "Mapir-SDK": "reactjs",
      },
    };
  },
});
const coord = [51.42, 35.72];

const StarMap = ({onMap}) => {
  const [markerArray, setMarkerArray] = useState([]);

  function reverseFunction(map, e) {
    var url = `https://map.ir/reverse/no?lat=${e.lngLat.lat}&lon=${e.lngLat.lng}`;
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": MAP_API_TOKEN,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        onMap(data.address_compact)
        
      });
    const array = [];
  
    array.push(
      <Mapir.Marker
        key={e.lngLat.lng}
        coordinates={[e.lngLat.lng, e.lngLat.lat]}
        anchor="top"
      />
    );
    setMarkerArray(array);
  }

  return (
    <Wrapper>
      <Mapir  center={coord} Map={Map} onClick={reverseFunction}>
        {markerArray}
       
      </Mapir>
    </Wrapper>
  );
};


StarMap.propTypes = {
  
  onMap: PropTypes.func,

}
export default StarMap;
