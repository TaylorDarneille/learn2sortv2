import SORTS from '../SORTS.js';
import { NavDropdown, Navbar, Nav } from 'react-bootstrap';

function Navigation(props) {
    selectSort = (ek) => {
		props.selectSort(ek);
	}

	goHome = () => {
		props.selectSort(-1);
	}

    // dropdown for selecting sort
    const sorts = SORTS.sorts.map((sort, i) => {
        return <MenuItem eventKey={sort.index} key={sort.index}>{sort.title}</MenuItem>
    })

    return(
        <Navbar className="nav">
            <Navbar.Header>
                <Navbar.Brand>
                    <button onClick={this.goHome}>Learn2Sort</button>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavDropdown title="Sorts" onSelect={this.selectSort} id="sorts-dropdown">
                    {sorts}
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Navigation