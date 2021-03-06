import styled from "styled-components";
import { GradientBackground, Panel } from "@util-components";

export const LoginWrapper = styled(GradientBackground)`
 width: 100%;
  background: url("img/welcome_image.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-size: 25px;
    font-family: "Work Sans", sans-serif;
  }
  margin-top: 60px;
`;

export const LoginPanel = styled(Panel)`
margin-top:50%;
margin-bottom:50%;
h1 {
    font-size: 25px;
    font-family: "Work Sans", sans-serif;
    margin-bottom:40px;
  }

`;

export const PanelBody = styled.div`
	display: grid;
	flex-direction: column;

	.provider-login-component {
		div[role="option"] {
			text-align: left !important;
			padding-left: 20px;
		}
	}
`;

export const LoginTitle = styled.span`
	font-family: Raleway;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1.2px;
	line-height: 19px;
	text-align: center;
	position: relative;
	margin: 30px 0;
	display: inline-block;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before,
	&::after {
		width: 32%;
		content: "";
		background: #656e75;
		height: 1px;
		box-sizing: border-box;
		top: 50%;
	}

	span {
		padding: 0 5px;
	}

	&::before {
		right: 0;
	}

	&::after {
		left: 0;
	}
`;
