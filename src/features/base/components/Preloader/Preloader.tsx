import React from "react";
import styles from "./Preloader.module.scss";

type mapStateToProps = {}

type mapDispatchToProps = {}

type propsType = mapStateToProps & mapDispatchToProps;

const Preloader: React.FC<propsType> = (props) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.preloader}>
                <div/>
                <div/>
            </div>
            <div>
                Loading...
            </div>
        </div>
    )
}

export default Preloader;
