import React from "react"

import Select from "react-select"

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: "3px",
  }),
  control: (styles, state) => ({
    ...styles,
    padding: 10,
    marginTop: "5%",
    marginBottom: "5%",
    color: "red",
  }),
  option: (styles, state) => ({
    ...styles,
    padding: 20,
    height: "100% !important",
    fontWeight: 100,
    color: state.isSelected ? "#FFF" : styles.color,
    backgroundColor: state.isSelected ? "#5691e2" : styles.color,
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.125)",
    "&:hover": {
      color: "#FFF",
      backgroundColor: "#0c67e4",
    },
  }),
  placeholder: (styles, state) => ({
    color: "#555555",
  }),
}

const SelectOwn = props => (
  <div
    style={{
      fontWeight: "bold",
      height: "100%",
      width: "273px",
      color: "#555555",
      marginTop: 0,
      paddingTop: 0,
    }}
  >
    <Select class="required" styles={customStyles} {...props} />
  </div>
)

export default SelectOwn
