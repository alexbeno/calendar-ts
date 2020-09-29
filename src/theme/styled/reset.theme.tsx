/**
 * @name reset
 */

import { createGlobalStyle } from 'styled-components';
import t from 'theme';

import font from 'theme/font/inter/index';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin:0;
      padding:0;
      border:0;
      font-size:100%;
      font:inherit;
      vertical-align:baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display:block;
  }
  body {
      line-height:1;
  }
  ol, ul {
      list-style:none;
  }
  blockquote, q {
      quotes:none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content:'';
      content:none;
  }
  table {
      border-collapse:collapse;
      border-spacing:0;
  }

  /* apply a natural box layout model to all elements */
  *,*::before,*::after,*:before,*:after {
      -moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;
  }

  /* inputs */
  input,button,textarea,select {
      color:inherit;
      font-size:inherit;
      font-style:inherit;
      font-family:inherit;
      -webkit-border-radius:0;
      border-radius:0;
      -webkit-padding-start:0;
      align-items:flex-start;
      text-index:0;
      border:none;
      outline:none;
      background:none;
      padding:0;
      margin:0;
      width:auto;
      height:auto;
      line-height:1em;
  }

  /* inputs appearance (not for every input)  */
  input[type=text],input[type=reset],input[type=password],input[type=search],input[type=email],input[type=tel],input[type=url],input[type=time],input[type=week],input[type=month],input[type=date],input[type=datetime],input[type=datetime-local],input[type=number],
  input[type=submit],input[type=reset],input[type=color],input[type=file],
  button,textarea,select {
      -webkit-appearance:none;
      -moz-appearance:none;
              appearance:none;
  }

  /* input color width */
  input[type=color] {
      width:1em;
  }

  /* IE clear cross */
  input::-ms-clear {
      display:none;
  }

  /* details and summary */
  details, summary {
      -webkit-appearance:none;
      -moz-appearance:none;
      appearance:none;
  }

  /* text size adjusting */
  body {
      -webkit-text-size-adjust:100%;
      -moz-text-size-adjust:100%;
              text-size-adjust:100%;
  }

  /* mark */
  mark {background:none;}

  /* Font smoothing */
  /**,*::before,*::after,*:before,*:after {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }*/

  /* hr */
  hr {
      height:1px;
      margin:0;padding:0;
  }

  /* u */
  u {
      text-decoration:none;
  }

  /* th */
  table th {
      text-align:left;
  }

  /* a */
  a {
      color:inherit;
      outline:none;
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 400;
    font-display: swap;
    src: url(${font.regularWoff}) format("woff2"),
        url(${font.regularWoff2}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 500;
    font-display: swap;
    src: url(${font.mediumWoff}) format("woff2"),
        url(${font.mediumWoff2}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 600;
    font-display: swap;
    src: url(${font.semiWoff}) format("woff2"),
        url(${font.semiWoff2}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 700;
    font-display: swap;
    src: url(${font.boldWoff}) format("woff2"),
        url(${font.boldWoff2}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-style:  normal;
    font-weight: 800;
    font-display: swap;
    src: url(${font.extraWoff}) format("woff2"),
        url(${font.extraWoff2}) format("woff");
  }


  body {
    color: black;
  }


`;
