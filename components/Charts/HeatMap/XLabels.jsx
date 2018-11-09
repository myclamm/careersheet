import React from "react";
import PropTypes from "prop-types";
import FixedBox from "./FixedBox";

function XLabels({ labels, width, labelsVisibility, squares, height }) {
  return (
    <div style={{ display: "flex" }}>
      <FixedBox width={width} />
      {labels.map((x, i) => (
        <div
          key={i}
          style={{
            flex: squares ? "none" : 1,
            fontSize: '12px',
            paddingTop: '15px',
            borderLeft: '1px solid grey',
            borderTop: '1px solid grey',
            borderRight: i === labels.length-1 ? '1px solid grey' : '',
            borderTopLeftRadius: i === 0 ? '5px' : '0px',
            borderTopRightRadius: i === labels.length-1 ? '5px' : '0px',
            fontWeight: 'bold',
            backgroundColor: '#fff',
            textAlign: "center",
            width: squares ? `${height + 1}px` : "undefined",
            visibility:
              labelsVisibility && !labelsVisibility[i] ? "hidden" : "visible",
          }}
        >
          {x}
        </div>
      ))}
    </div>
  );
}

XLabels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
  ).isRequired,
  labelsVisibility: PropTypes.arrayOf(PropTypes.bool),
  width: PropTypes.number.isRequired,
  squares: PropTypes.bool,
  height: PropTypes.number,
};

XLabels.defaultProps = {
  labelsVisibility: null,
  squares: false,
  height: 30,
};

export default XLabels;
