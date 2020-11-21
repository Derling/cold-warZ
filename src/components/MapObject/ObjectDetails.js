import * as _ from 'lodash';
import React from 'react';

import OBJECTS_DATA, { UPGRADE_LABELS } from './assets/objectsData';

const ObjectDetail = ({ object }) => {
    const { description, upgrades} = _.get(OBJECTS_DATA, object)

    const upgradeList = upgrades?.map((upgrade, index) => 
        <li key={index}>{UPGRADE_LABELS[index]} {upgrade}</li>
    )
    return (
        <div style={{width:"100%", height:'100%'}}>
            <h1>{object}</h1>
            <p>{description}</p>
            {upgradeList && (
                <div>
                    <h2>Upgrades</h2>
                    <ul style={{listStyle:'none'}}>
                        {upgradeList}
                    </ul>
                </div>
            )}
        </div>
    )
};

export default ObjectDetail;