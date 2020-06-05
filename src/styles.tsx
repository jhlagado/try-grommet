import { AnyObj } from './types';
import { createGlobalStyle } from 'styled-components';

// export const GlobalStyle = createGlobalStyle`

// body {
//   color: #777;
// }

// .pure-img-responsive {
//   max-width: 100%;
//   height: auto;
// }

// #layout,
// #menu,
// .menu-link {
//   -webkit-transition: all 0.2s ease-out;
//   -moz-transition: all 0.2s ease-out;
//   -ms-transition: all 0.2s ease-out;
//   -o-transition: all 0.2s ease-out;
//   transition: all 0.2s ease-out;
// }

// /*
// This is the parent <div> that contains the menu and the content area.
// */
// #layout {
//   position: relative;
//   left: 0;
//   padding-left: 0;
// }
// #layout.active #menu {
//   left: 150px;
//   width: 150px;
// }

// #layout.active .menu-link {
//   left: 150px;
// }
// .content {
//   margin: 0 auto;
//   padding: 0 2em;
//   max-width: 800px;
//   margin-bottom: 50px;
//   line-height: 1.6em;
// }

// .header {
//   margin: 0;
//   color: #333;
//   text-align: center;
//   padding: 2.5em 2em 0;
//   border-bottom: 1px solid #eee;
// }
// .header h1 {
//   margin: 0.2em 0;
//   font-size: 3em;
//   font-weight: 300;
// }
// .header h2 {
//   font-weight: 300;
//   color: #ccc;
//   padding: 0;
//   margin-top: 0;
// }

// .content-subhead {
//   margin: 50px 0 20px 0;
//   font-weight: 300;
//   color: #888;
// }

// #menu {
//   margin-left: -150px; /* "#menu" width */
//   width: 150px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   z-index: 1000; /* so the menu or its navicon stays above all content */
//   background: #191818;
//   overflow-y: auto;
// }
// /*
// All anchors inside the menu should be styled like this.
// */
// #menu a {
//   color: #999;
//   border: none;
//   padding: 0.6em 0 0.6em 0.6em;
// }

// /*
// Remove all background/borders, since we are applying them to #menu.
// */
// #menu .pure-menu,
// #menu .pure-menu ul {
//   border: none;
//   background: transparent;
// }

// /*
// Add that light border to separate items into groups.
// */
// #menu .pure-menu ul,
// #menu .pure-menu .menu-item-divided {
//   border-top: 1px solid #333;
// }

// #menu .pure-menu li a:hover,
// #menu .pure-menu li a:focus {
//   background: #333;
// }

// #menu .pure-menu-selected,
// #menu .pure-menu-heading {
//   background: #1f8dd6;
// }

// #menu .pure-menu-selected a {
//   color: #fff;
// }

// #menu .pure-menu-heading {
//   font-size: 110%;
//   color: #fff;
//   margin: 0;
// }

// .menu-link {
//   position: fixed;
//   display: block; /* show this only on small screens */
//   top: 0;
//   left: 0; /* "#menu width" */
//   background: #000;
//   background: rgba(0, 0, 0, 0.7);
//   font-size: 10px; /* change this value to increase/decrease button size */
//   z-index: 10;
//   width: 2em;
//   height: auto;
//   padding: 2.1em 1.6em;
// }

// .menu-link:hover,
// .menu-link:focus {
//   background: #000;
// }

// .menu-link span {
//   position: relative;
//   display: block;
// }

// .menu-link span,
// .menu-link span:before,
// .menu-link span:after {
//   background-color: #fff;
//   width: 100%;
//   height: 0.2em;
// }

// .menu-link span:before,
// .menu-link span:after {
//   position: absolute;
//   margin-top: -0.6em;
//   content: ' ';
// }

// .menu-link span:after {
//   margin-top: 0.6em;
// }

// @media (min-width: 48em) {
//   .header,
//   .content {
//     padding-left: 2em;
//     padding-right: 2em;
//   }

//   #layout {
//     padding-left: 150px; /* left col width "#menu" */
//     left: 0;
//   }
//   #menu {
//     left: 150px;
//   }

//   .menu-link {
//     position: fixed;
//     left: 150px;
//     display: none;
//   }

//   #layout.active .menu-link {
//     left: 150px;
//   }
// }

// @media (max-width: 48em) {
//   #layout.active {
//     position: relative;
//     left: 150px;
//   }
// }

// html, body {
//   height: 100%;
// }

// body {
//   margin: 0;
//   padding: 0;
//   font-family: sans-serif;
// }

// #root {
//   display: flex;
//   flex-direction: column;
//   height: 100%;
//   position: relative;
// }
// `;

export const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};
