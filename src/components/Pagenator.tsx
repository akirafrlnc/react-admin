import React from "react";

const Pagenator = (props: {page: number, lastPage: number,  pageChanged: (page: number) => void}) => {
	let page = 1

	const next = () => {
		if (props.page < props.lastPage) {

			props.pageChanged(props.page + 1);
		}
	}

	const prev = () => {
		if (props.page >= 1) {

			props.pageChanged(props.page - 1);
		}
	}

	return (
		<nav className="pagination">
		<ul className="page-item">
			<li><button className='page-link' onClick={prev}>Previous</button></li>
			<li><button className='page-link' onClick={next}>Next</button></li>
		</ul>
	</nav>
	)
}
export default Pagenator
