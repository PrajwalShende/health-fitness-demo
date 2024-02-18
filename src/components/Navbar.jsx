import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import Logo from "../assets/Logo-removebg-preview.png";
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'


const Navbar = () => {

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <Stack  direction="row"
    justifyContent="space-around"
    sx={{gap: { sm: '122px', xs: '40px'}, mt: { sm : '32px', xs: '20px'}, justifyContent: 'none'}} px="20px"
   >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "120px", height: "100px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#excercies"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Excercises
        </a>
        {
          isAuthenticated && <p> Welcome {user.name}</p>
        }

        {
          isAuthenticated ? <Button className="btn-logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin }  })} >Log Out</Button>
          : <Button className="btn-login" onClick={() => loginWithRedirect()} >Log In</Button>
        }
        
      </Stack>
    </Stack>
    
  );
};

export default Navbar;
