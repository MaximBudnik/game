import React, {useEffect, useState} from "react";
import {Image, Layer} from "react-konva";
import {getRedKnightSprite, KnightSpriteSize} from "../../../base/getSprite/getSprites";
import useImage from "use-image";
import _tileset1 from "../../../../resources/sprites/tileset1.png";
import {appConfig} from "../../../../config/appConfig";


const LogoAndTitleLayer: React.FC = (props) => {
    const [tileset1] = useImage(_tileset1);
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(function () {
            setCounter(counter + 1)
            if (counter === 3) {
                setCounter(0)
            }
        }, appConfig.game.frameDelay)
        return () => {
            clearTimeout(timeout)
        }
    }, [counter, setCounter])
    return (
        <Layer imageSmoothingEnabled={false}>
            <Image
                x={16 * 10}
                rotation={45 - counter * 2}
                crop={{
                    x: 21 * 16 - 16,
                    y: 6 * 16 - 16,
                    width: 16,
                    height: 32,
                }}
                scale={{
                    x: 8,
                    y: 8
                }}
                image={tileset1}
                width={16}
                height={32}
            />
            <Image
                y={16 * 2}
                crop={getRedKnightSprite(counter)}
                scale={{
                    x: 8,
                    y: 8
                }}
                image={tileset1}
                {...KnightSpriteSize}
            />
        </Layer>
    )
}

export default LogoAndTitleLayer;
