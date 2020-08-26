import React from "react"

import Select from "react-select"

const customStyles = {
  menuList: (provided, state) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: "3px",
    cursor: "pointer",
  }),
  control: (styles, state) => ({
    ...styles,
    padding: 10,
    marginTop: "5%",
    marginBottom: "5%",
    cursor: "pointer",
    fontFamily: "NovaSemi",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14.5px",
    color: "red !important",
  }),
  option: (styles, state) => ({
    ...styles,
    padding: 20,
    height: "100% !important",
    cursor: "pointer",
    color: state.isFocused || state.isSelected ? "#FFF" : styles.color,
    backgroundColor:
      state.isFocused || state.isSelected ? "#236CD1" : styles.color,
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.125)",
    "&:hover": {
      color: "#FFF",
      backgroundColor: "#0c67e4",
    },
    fontFamily: "NovaReg",
    fontWeight: 400,
  }),
  placeholder: (styles, state) => ({
    color: "#555555",
    fontFamily: "NovaSemi",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: "14.5px",
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
    <Select
      isSearchable={false}
      inputProps={{ readOnly: true }}
      class="required"
      styles={customStyles}
      {...props}
    />
  </div>
)

export default SelectOwn
