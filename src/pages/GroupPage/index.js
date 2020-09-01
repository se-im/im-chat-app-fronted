import React, { Fragment } from 'react';
import GroupPanel from './GroupPanel/Group';
import GroupInfo from './GroupInfoPanel/GroupInfo';

const index = () => {
    return (
        <Fragment>
            <GroupPanel />
            <GroupInfo />
        </Fragment>
    );
};
export default index;
