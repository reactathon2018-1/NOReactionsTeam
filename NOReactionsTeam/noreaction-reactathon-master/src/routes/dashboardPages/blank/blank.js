import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'Blank';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>NodeJs Hackathon</PageHeader>
        </div>
        <img src="/node-image.png"/>
      </div>

    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
