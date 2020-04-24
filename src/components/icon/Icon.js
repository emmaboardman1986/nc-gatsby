import React from "react"
import PropTypes from "prop-types"

const icons = {
  upload: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12",
  star:
    "M23.88 9.42c0-.63-.48-1.14-1.06-1.14h-.1l-7.29-.18L12.95.83A1.07 1.07 0 0011.94 0c-.48 0-.89.35-1.01.83L8.44 8.1l-7.28.19h-.1C.46 8.28 0 8.78 0 9.41c0 .4.2.76.48.96l5.8 4.6-2.07 7.2a1.2 1.2 0 00-.12.51c0 .64.47 1.15 1.06 1.15a1 1 0 00.65-.25l6.14-4.37 6.14 4.37a1 1 0 00.65.25c.58 0 1.05-.51 1.05-1.15 0-.18-.04-.36-.11-.52l-2.07-7.2 5.8-4.59c.28-.2.48-.55.48-.96",
}

const Icon = ({ icon, color, fill }) => (
  <svg
    fill={fill ? fill : "none"}
    height="24"
    stroke={color ? color : "currentColor"}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icons[icon]} />
  </svg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  fill: PropTypes.string
}

export default Icon
