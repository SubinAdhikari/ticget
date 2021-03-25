import React,{useContext,useState} from 'react';
import {Navbar,NavDropdown,Nav,Button} from 'react-bootstrap';
import MenuBar from './MenuBar';
import Modal from 'react-bootstrap/Modal'
import {InputGroup,FormControl} from 'react-bootstrap'

import {SignInContext} from '../../context/SignInContextProvider';
import {SignUpContext} from '../../context/SignUpContextProvider';



const Header = () =>{
const {show, setShow} = useContext(SignInContext);
const {showSignUp, setShowSignUp}=useContext(SignUpContext);
const [signInFormState,setSignInFormState]=useState({
  email:'',
  password:''
})
const [signUpFormState,setSignUpFormState]=useState({
  email:'',
  password:'',
  mobileNumber:''
})

const SignInFormChangeHandler = (e) =>{
  const {name,value}=e.target;
  setSignInFormState((prevValue)=>{
    return{
      ...prevValue,
      [name]:value
    }
  })
}
const emptySignInFormOnHide = () =>{
  setSignInFormState({
    email:'',
  password:''
  });
  setShow(false)
}
const emptySignUpFormOnHide = () =>{
  setSignUpFormState({
    email:'',
    password:'',
    mobileNumber:''
  })
  setShowSignUp(false);
}

const SignUpFormChangeHandler = (e) =>{
  const {name,value}=e.target;
  setSignUpFormState((prevValue)=>{
    return{
      ...prevValue,
      [name]:value
    }
  })
}

// Redirect link in bottom of form
const signUpModalOpenHandler = () =>{
  setShow(false);
  setShowSignUp(true);
  setSignInFormState({
    email:'',
    password:''
  })
}

const signInModalOpenHandler = () =>{
  setShowSignUp(false);
  setShow(true);
  setSignUpFormState({
    email:'',
    password:'',
    mobileNumber:''
  })
}
// Redirect link in bottom of form Ends

    return(
        <>
  <Navbar bg="dark" variant="dark" className="navBarMainDiv">
    <Navbar.Brand href="/">TICGET</Navbar.Brand>

    <div className="searchBox col-lg-4 col-md-4 col-10 p-0 m-0">
      <input type="text" placeholder="Search Movies" className="w-100 px-5 py-1"/>
      <i className="fa fa-search"></i>
    </div>

    <Nav className="ml-lg-auto RightItems">
      <NavDropdown title="Language" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">नेपाली</NavDropdown.Item>
      </NavDropdown>
        <Button className="signInBtn px-2 py-0 ml-2" onClick={()=>setShow(true)}>
          Sign in
        </Button>
    </Nav>
   

    <Button className="signInBtnMobile px-2 py-0 ml-2 mt-3 mr-3" onClick={()=>setShow(true)}>
          Sign in
    </Button>
    
  </Navbar> 

<MenuBar/>

{/* LOGIN MODAL */}
<Modal className="signInModelMainDiv" show={show} onHide={emptySignInFormOnHide}  centered>
        <Modal.Header
        //  closeButton
         >
          <Modal.Title>Sign-In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="basic-addon1"
                  name="email"
                  type="text"
                  value={signInFormState.email}
                  onChange={SignInFormChangeHandler}
                  autoComplete="off"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  name="password"
                  type="password"
                  value={signInFormState.password}
                  onChange={SignInFormChangeHandler}
                  autoComplete="off"
                />
              </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className="col-sm-12" variant="primary" onClick={()=>alert(`Email ${signInFormState.email} and pssword is ${signInFormState.password}`)}>
            Login
          </Button>
        </Modal.Footer>
        <span className="d-flex justify-content-center align-items-center SignUpTextMain">Not register?&nbsp;
          <span className="signUpText" onClick={signUpModalOpenHandler} style={{cursor:'pointer'}}>SignUp now</span>
        </span>

</Modal>
{/* LOGIN MODAL ENDS */}

{/* SIGNUP MODAL */}
<Modal className="signInModelMainDiv" show={showSignUp} onHide={emptySignUpFormOnHide}  centered >
        <Modal.Header
        //  closeButton
         >
          <Modal.Title>Sign-Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Email Address"
                  aria-label="Email Address"
                  aria-describedby="basic-addon1"
                  name="email"
                  type="email"
                  autoComplete="off"
                  value={signUpFormState.email}
                  onChange={SignUpFormChangeHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  name="password"
                  type="password"
                  autoComplete="off"
                  value={signUpFormState.password}
                  onChange={SignUpFormChangeHandler}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-phone"></i>
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Mobile Number"
                  aria-label="Mobile Number"
                  aria-describedby="basic-addon1"
                  type='number'
                  autoComplete="off"
                  name="mobileNumber"
                  value={signUpFormState.mobileNumber}
                  onChange={SignUpFormChangeHandler}
                />
              </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button className="col-sm-12" variant="primary" onClick={()=>alert(`Email is ${signUpFormState.email} password is ${signUpFormState.password} Mobile No is ${signUpFormState.mobileNumber}`)}>
            Register
          </Button>
        </Modal.Footer>
        <span className="d-flex justify-content-center align-items-center SignUpTextMain">Return to&nbsp;
          <span className="signUpText"  onClick={signInModalOpenHandler} style={{cursor:'pointer'}}>Login ?</span>
        </span>

</Modal>
{/* SIGNUP MODAL ENDS */}

        </>
    )
}
export default Header;