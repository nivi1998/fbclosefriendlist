import React, { useState } from 'react';
import '../App.css';
import AllFriendList from './AllFriendList';
import CloseList from './CloseList';
import Modalcomp from './Modal';

const Search = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div>
        <div className="search-container">
          <input type="search" className="input" placeholder="search here" />

          <button
            type="button"
            className="btn-friend"
            onClick={() => setModalShow(true)}
          >
            Add Friend
          </button>
          <Modalcomp show={modalShow} onHide={() => setModalShow(false)} />
        </div>
        <div>
          <h4 className="heading-fri">Close Friends</h4>
          <CloseList />
        </div>

        <div>
          <h4 className="heading-fri">All Friends</h4>
          <AllFriendList />
        </div>
      </div>
    </>
  );
};

export default Search;
