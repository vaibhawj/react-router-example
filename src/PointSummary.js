import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      Point Summary
      <br />
      <Link to="/pointDetails?program=1">Program 1</Link>
      <br />
      <Link to="/pointDetails?program=2">Program 2</Link>
      <br />
      <Link to="/pointDetails?program=3">Program 3</Link>
    </div>
  )
}