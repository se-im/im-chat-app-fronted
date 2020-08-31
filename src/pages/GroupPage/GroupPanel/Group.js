import React from 'react';
import styles from './Group.css';
import SearchPanel from './SearchPanel/search';
import GroupList from './GroupList/GroupList';

const index = () => {
    return (
        <div className={styles.group_Panel}>
            <SearchPanel />
            <GroupList />
        </div>
    );
};
export default index;
