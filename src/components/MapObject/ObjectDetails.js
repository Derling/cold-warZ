import * as _ from 'lodash';
import React from 'react';

import OBJECTS_DATA from './assets/objectsData';

const ObjectDetail = ({ object }) => {
    const { description } = _.get(OBJECTS_DATA, object)

    return (
        <div>
            {description}
        </div>
    )
};

export default ObjectDetail;