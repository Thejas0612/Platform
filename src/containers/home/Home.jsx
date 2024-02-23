import React, { useState, useEffect } from 'react';
import style from './home.module.css';
import Ddl from '../ddl/Ddl'


const Home = () => {

  return (
    <div>
      <h1>It’s Time to Transform Your Projects and Operations</h1>
      <span>
        Many of the industry’s standard approaches were created decades ago, long before today’s
        innovation. Doing more of the same is yielding only incremental benefits and management
        expects you to deliver better results. With a partner like Emerson, you can. Our automation
        expertise – from projects to operations – is focused on helping you hit your targets and
        move your organization into Top Quartile performance.
      </span>
      <Ddl/>
    </div>
  );
};
export default Home;
