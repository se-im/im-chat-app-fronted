import React from 'react';
import styles from './index.css';
import { Input, List, Avatar } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const index = ({ Conversations }) => {
    return (
        <div className={styles.cvs_Panel}>
            <div className={styles.cvs_header}>
                <Input
                    size="large"
                    className={styles.search}
                    placeholder="Search Conversations"
                    prefix={<SearchOutlined />}
                />
                <div className={styles.add}>
                    <a className={styles.add_icon}>+</a>
                </div>
            </div>
            <List
                className={styles.cvs_body}
                itemLayout="horizontal"
                dataSource={Conversations.data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }
                            title={
                                <a href="https://ant.design">{item.title}</a>
                            }
                            description="Ant Design"
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};
const mapStateToProps = ({ Conversations }) => {
    return {
        Conversations,
    };
};
export default connect(mapStateToProps)(index);
