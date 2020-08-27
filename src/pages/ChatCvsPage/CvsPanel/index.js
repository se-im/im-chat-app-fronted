import React from 'react';
import styles from './index.css';
import { connect } from 'react-redux';
import CvsBody from './CvsBody';
import Search from './SearchPanel/search';

const index = () => {
    return (
        <div className={styles.cvs_Panel}>
            <Search />
            <CvsBody />
        </div>
    );
};
const mapStateToProps = () => {
    return {};
};
export default connect(mapStateToProps)(index);
