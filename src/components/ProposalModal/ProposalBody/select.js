import React from "react"

import Select from "react-select"

const options = [
  { value: "pedro", label: "Option1" },
  { value: "strawberry", label: "Option2" },
  { value: "vanilla", label: "Option3" },
  { value: "vanillperaa", label: "Option4" },
]

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
}

const SelectOwn = () => (
  <div
    style={{
      fontWeight: "bold",
      height: "100%",
      width: "273px",
      color: "grey",
      marginTop: 0,
      paddingTop: 0,
    }}
  >
    <Select
      class="required"
      placeholder="Select..."
      autoFocus={true}
      options={options}
      styles={customStyles}
    />
  </div>
)

export default SelectOwn
