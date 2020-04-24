import { css } from "styled-components"

export const setColor = {
  brandPrimary: "#2F549C",
  brandPrimaryLight: "#f0f0f9",
  brandPrimaryMedium: "#89a5dc",
  brandSecondary: "#E7131D",
  brandSecondaryLight: "#FF5861",
  brandWhite: "#FFF",
  brandWhiteOffset: "#f8f8f8",
  brandBlack: "#000",
  brandGreyDark: "#2f2f2f",
  gradientPurple: "#434599",
  gradientCyan: "cyan",
  gradientCyanLight: "#7fffff",
  gradientGreen: "#00cd00",
  gradientGreenLight: "#66e166",
  gradientYellow: "yellow",
  gradientYellowLight: "#ffff32",
  gradientOrange: "orange",
  gradientRed: "#ED2530",
}

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex;align-items:${y};justify-content:${x}`
}

export const setSharedSpacing = {
  sectionPadding: "1rem",
  sectionPaddingDesktop: "3rem",
  heroRightOffset: "4rem",
}

export const setSharedBorderRadius = {
  radiusInput: "0.4rem",
  radiusMedium: "1rem",
  radiusLarge: "2rem",
  radiusSpeechBubble: "4rem",
}

export const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "992px",
  lg: "1200px",
  xl: "1600px"
}

export const setSharedHeights = {
  navHeight: "8vh",
}

export const breakpoint = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export function variantName(name, value) {
  return `${name}-${value}`
}


export function responsiveVariantName(name, value, breakpoint = "_") {
  breakpoint !== "_" ? (breakpoint = `--${breakpoint}`) : (breakpoint = "")
  return `${name}-${value}${breakpoint}`
}

  // loop through each key and assign key name to variable breakpoint
  export function createResponsiveClassNames(namespace, prop) {
    let newArray = [];
    Object.keys(prop).forEach(key => {
      let generatedClassName = responsiveVariantName(namespace, prop[key], key);
      newArray.push(generatedClassName)
    })
    return newArray.join(" ");
  }


export const SIZE_SCALE = Object.freeze({
  large: "large",
  large2x: "2x-large",
  large3x: "3x-large",
  large4x: "4x-large",
  large5x: "5x-large",
  large6x: "6x-large",
  large7x: "7x-large",
  large8x: "8x-large",
  largex: "x-large",
  large2xNegative: "2x-large--negative",
  large3xNegative: "3x-large--negative",
  large4xNegative: "4x-large--negative",
  large5xNegative: "5x-large--negative",
  large6xNegative: "6x-large--negative",
  large7xNegative: "7x-large--negative",
  large8xNegative: "8x-large--negative",
  small: "small",
  small2x: "2x-small",
  smallx: "x-small",
})
