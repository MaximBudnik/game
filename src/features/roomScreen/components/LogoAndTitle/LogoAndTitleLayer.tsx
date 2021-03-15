import React, {useEffect, useState} from "react";
import {Image, Layer} from "react-konva";
import {getKnightSprite, KnightSpriteSize} from "../../../base/getSprite/knight";
import useImage from "use-image";
import tileset1 from "../../../../resources/sprites/tileset1.png";


const LogoAndTitleLayer: React.FC = (props) => {
    const [image] = useImage(tileset1);

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        const timeout = setTimeout(function () {
            setCounter(counter + 1)
            if (counter === 3) {
                setCounter(0)
            }
        }, 100)
        return () => {
            clearTimeout(timeout)
        }
    }, [counter, setCounter])
    return (
        <Layer imageSmoothingEnabled={false}>
            <Image
                x={16*10}
                rotation={45-counter*2}
                crop={{
                    x: 21 * 16 - 16,
                    y: 6 * 16 - 16,
                    width: 16,
                    height: 32,
                }}
                scale={{
                    x: 8,
                    y:8
                }}
                image={image}
                width={16}
                height={32}
            />
            <Image
                y={16*2}
                crop={getKnightSprite(counter)}
                scale={{
                    x: 8,
                    y: 8
                }}
                image={image}
                {...KnightSpriteSize}
            />
        </Layer>
    )
}

export default LogoAndTitleLayer;
