import React, {useEffect, useState} from "react";
import {Group, Image} from "react-konva";
import {
    getBlueDragonSprite,
    getBoySprite,
    getGirlSprite,
    getGreenDragonSprite,
    getOrangeKnightSprite,
    getRedKnightSprite,
    getSpriteF
} from "../../base/getSprite/getCharacterSprites";
import useImage from "use-image";
import _tileset1 from "../../../resources/sprites/tileset1.png";
import {AnimationDirectionType, AnimationType, CharacterType} from "../../../types";
import {appConfig} from "../../../config/appConfig";
import {canvasConfig} from "../../../config/canvasConfig";

type propsType = {
    character: CharacterType
    animation: AnimationType
    animationDirection: AnimationDirectionType
    x: number
    y: number
};

const getFunctionForSpriteCrop = (character: CharacterType): getSpriteF => {
    switch (character) {
        case 'girl':
            return getGirlSprite
        case 'boy':
            return getBoySprite
        case 'redKnight':
            return getRedKnightSprite
        case 'orangeKnight':
            return getOrangeKnightSprite
        case 'blueDragon':
            return getBlueDragonSprite
        case 'greenDragon':
            return getGreenDragonSprite
    }
}

const getStartFrameAndNumberOfFramesForAnimation = (animation: AnimationType): [number, number] => {
    switch (animation) {
        case "idle":
            return [0, 4]
        case "walking":
            return [4, 4]
        case "attacked":
            return [8, 2]
        default:
            return [0, 4]
    }
}


const PlayerEntity: React.FC<propsType> = (props) => {
    const [tileset1] = useImage(_tileset1);
    const [animationFrame, setAnimationFrame] = useState(0);
    const cropSprite = getFunctionForSpriteCrop(props.character)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const [startAnimationFrame, numberOfFrames] = getStartFrameAndNumberOfFramesForAnimation(props.animation)

            if (animationFrame >= numberOfFrames + startAnimationFrame - 1) {
                setAnimationFrame(startAnimationFrame)
            } else {
                setAnimationFrame(animationFrame + 1)
            }
        }, appConfig.game.frameDelay)
        return () => {
            clearTimeout(timeout)
        }
    }, [animationFrame, setAnimationFrame, props.animation])

    const scaleX = canvasConfig.scaleX * (props.animationDirection === "left" ? 1 : -1)
    const offsetX = props.animationDirection === "left" ? -canvasConfig.characterSpriteSize.height/2 : 0


    console.log(props.animationDirection)
    console.log(scaleX)


    return (
        <Group x={props.x} y={props.y} offsetX={offsetX} scaleX={scaleX} scaleY={canvasConfig.scaleY}>
            {/*Character*/}
            <Image
                scaleX={-1}
                crop={cropSprite(animationFrame)}
                image={tileset1}
                height={canvasConfig.characterSpriteSize.height}
                width={canvasConfig.characterSpriteSize.width}
            />
            {/*Weapon*/}

            {/*Effects*/}


        </Group>
    )
}

export default PlayerEntity;
