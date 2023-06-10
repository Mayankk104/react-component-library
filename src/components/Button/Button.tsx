import React from 'react';
import styles from'./Button.module.css';

interface ButtonPropsTypes {
    label: string
    primary?: boolean,
    backgroundColor?: string
}

function Button(props: ButtonPropsTypes) {
    const {primary = false, backgroundColor = '#1ea7fd'} = props
    return (
        <button
            className={styles.btn}
            style={{
            fontSize: primary ? '1.2rem' : '1rem',
            backgroundColor
        }}>
            {props.label}
        </button >
    )
};

export default Button;