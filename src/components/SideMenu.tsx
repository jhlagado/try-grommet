// import * as React from 'react';

// import styled from 'styled-components';
// import { Stylable } from '../types';
// import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom';
// import { Nav, Anchor, AnchorProps } from 'grommet';

// export interface Props extends AnchorProps, RouteComponentProps<{}> {
//   path: string;
//   onClick?(e: React.MouseEvent): void;
// }

// const BaseNavAnchor = ({
//   onClick,
//   path,
//   history,

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   match,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   location,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   staticContext,

//   ...anchorProps
// }: Props) => {
//   const handleClick = (e: any) => {
//     if (onClick) {
//       onClick(e);
//     }
//     if (e.defaultPrevented) {
//       // allow .onClick to cancel this action via e.preventDefault()
//       return;
//     }
//     if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
//       // don't do anything if any modifier key is pressed
//       // it's likely the user is trying to open the link in a new tab or window
//       return;
//     }
//     // const { path, history } = ;
//     e.preventDefault();
//     history.push(path);
//   };

//   // const {} = ;
//   const href = history.createHref({ pathname: path });
//   return <Anchor {...anchorProps} href={href} onClick={handleClick} />;
// };

// export const NavAnchor = withRouter(BaseNavAnchor);

// const BaseSideMenu = ({ className }: Stylable) => {
//   return (
//     <div className={`${className} SideMenu`} id="SideMenu">
//       <Nav pad="large">
//         <NavAnchor
//           // activeClassName="grommetux-anchor--active"
//           // to="/recoil-todos"
//         >
//           Recoil Todos
//         </NavAnchor>

//         <Anchor href="x" label="x" key="key" />
//         <NavLink
//           className="grommetux-anchor"
//           activeClassName="grommetux-anchor--active"
//           to="/recoil-todos"
//         >
//           Recoil Todos
//         </NavLink>
//         <NavLink
//           className="grommetux-anchor"
//           activeClassName="grommetux-anchor--active"
//           to="/formik-form"
//         >
//           Formik Form
//         </NavLink>
//         <NavLink
//           className="grommetux-anchor"
//           activeClassName="grommetux-anchor--active"
//           to="/simple-form"
//         >
//           Simple Form
//         </NavLink>
//         <NavLink
//           className="grommetux-anchor"
//           activeClassName="grommetux-anchor--active"
//           to="/top-ten"
//         >
//           Top Ten
//         </NavLink>
//         <NavLink
//           className="grommetux-anchor"
//           activeClassName="grommetux-anchor--active"
//           to="/first-ten"
//         >
//           First Top Ten
//         </NavLink>
//         <NavLink
//           className="grommetux-anchor"
//           activeClassName="grommetux-anchor--active"
//           to="/info"
//         >
//           Info
//         </NavLink>
//       </Nav>
//     </div>
//   );
// };

// export const SideMenu = styled(BaseSideMenu)`
//   .selected {
//     background: #444;
//   }
// `;
