import React, { useState, useEffect } from "react";
import Nav from './nav'
import Class from './class'
const Homepage = () => {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {

  }, []);

  return (
    <div>
        <Class/>
    </div>
  );
};

export default Homepage;