import React, { useState, useEffect } from "react";
import { Button } from 'antd';
import './nav.css'
const Nav = () => {
  return (
    <div className='nav'>
      <h1>Ham Study.org</h1>
      <Button className='button'>Login</Button>
      <Button className='button'>Sign up</Button>

    </div>
  );
};

export default Nav;