import { css } from 'styled-components';

export const setColor = {
    brandPrimary: "#2F549C",
    brandSecondary: "#ED2530",
    brandWhite: "#FFF",
	brandBlack: "#000",
	gradientPurple: "#434599",
	gradientCyan: "cyan",
	gradientGreen: "#00cd00",
	gradientGreenLight: "#66e166",
	gradientYellow: "yellow",
	gradientYellowLight: "#ffff32",
	gradientOrange: "orange",
	gradientRed: "#ED2530"
}

export const setFlex = ({x='center',y='center'} = {}) => {
    return `display: flex;align-items:${y};justify-content:${x}`;
}

export const setPadding = {
    sectionPadding: "3rem",
    heroRightOffset: "4rem",
}

export const breakpoints = {
	xs: '480px',
	sm: '768px',
	md: '992px',
	lg: '1200px'
};

export const breakpoint = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media (min-width: ${breakpoints[label]}) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

