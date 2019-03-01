import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            user: props.user
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            user: nextProps.user
        })
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { user } = this.state;
        return ( <div class="containers">
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/home">CIGVue</NavbarBrand>

            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/startOver">StartOver</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/filters">Filters</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Graphs">Graphs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/exports">Exports</NavLink>
              </NavItem>

              <NavItem>
                <NavLink>Welcome, Admin!</NavLink>
              </NavItem>

{/* move this all the way to the right*/}
<UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret>
 {/*change this with a image*/}image
</DropdownToggle>
<DropdownMenu right>
 <DropdownItem>
   Login
 </DropdownItem>
 <DropdownItem>
   Logout
 </DropdownItem>
</DropdownMenu>
</UncontrolledDropdown>


              <NavItem>

              </NavItem>
            </Nav>

        </Navbar>
      </div>
    );
  }
}

/*
<div>
<Navbar color="primary" dark expand="md">
 <NavbarBrand href="/home">CIGVue</NavbarBrand>
 //<NavbarToggler onClick={this.toggle} />
 //<Collapse isOpen={this.state.isOpen} navbar>
   <Nav className="mr-auto" navbar>
     <NavItem>
       <NavLink href="/startOver">StartOver</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/filters">Filters</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/Graphs">Graphs</NavLink>
     </NavItem>
     <NavItem>
       <NavLink href="/exports">Exports</NavLink>
     </NavItem>


     <NavItem>

      //<h5 className="display-5"> {user} </h5>
     </NavItem>
   </Nav>
 </Collapse>
</Navbar>
</div>
*/
