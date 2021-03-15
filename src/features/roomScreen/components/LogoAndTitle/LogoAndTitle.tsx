import React from "react";
import styles from "./LogoAndTitle.module.scss";
import {Stage} from "react-konva";
import LogoAndTitleLayer from "./LogoAndTitleLayer";


const LogoAndTitle: React.FC = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.logoRow}>
                <div className={styles.logo}>
                    <Stage width={16 * 14} height={27 * 10}>
                        <LogoAndTitleLayer/>
                    </Stage>
                </div>
            </div>
            <div className={styles.title}>
                Monsters and Dungeons
            </div>
        </div>
    )
}

export default LogoAndTitle;
