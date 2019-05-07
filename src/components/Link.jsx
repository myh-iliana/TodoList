import React, { Component } from 'react';

import styles from './Link.scss';

export default class Link extends Component {
    render() {
        const { active, children, onClick } = this.props;

        if (active) {
            return <span className={styles.active}>{children}</span>
        }

        return <span className={styles.root} onClick={onClick}>{children}</span>
    }
}