import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
			<div className="offcanvas-md offcanvas-end bg-body-tertiary" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
					<ul className="nav flex-column">
						<li className="nav-item">
							<NavLink to={"/"} className="nav-link">
								Dashboard
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={"/users"} className="nav-link">
								Users
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={"/roles"} className="nav-link">
								Roles
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Menu;
