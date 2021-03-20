import React, {useEffect, useState} from "react";
import {Group, Image} from "react-konva";
import {getRedKnightSprite} from "../../base/getSprite/getSprites";
import useImage from "use-image";
import _tileset1 from "../../../resources/sprites/tileset1.png";
import {CharacterType} from "../../../types";
import {appConfig} from "../../../config/appConfig";
import {IRect} from "konva/types/types";
import {spriteConfig} from "../../../config/spriteConfig";

type propsType = {
    character: CharacterType
    animation: 'idle' | 'walking' | 'attacked'
    x: number
    y: number
};

const getFunctionForSpriteCrop = (character: CharacterType): (frame: number) => IRect => {
    switch (character) {
        case 'redKnight':
        default:
            return getRedKnightSprite
    }
}

const getNumberOrFramesPerAnimation = (animation: 'idle' | 'walking' | 'attacked'): number => {
    switch (animation) {
        case "idle":
            return 4
        case "walking":
            return 4
        case "attacked":
            return 1
    }
}


const PlayerEntity: React.FC<propsType> = (props) => {
    const [tileset1] = useImage(_tileset1);
    const [animationFrame, setAnimationFrame] = useState(0);

    const cropSprite = getFunctionForSpriteCrop(props.character)
    useEffect(() => {
        const timeout = setTimeout(function () {
            setAnimationFrame(animationFrame + 1)
            if (animationFrame === getNumberOrFramesPerAnimation(props.animation)) {
                setAnimationFrame(0)
            }
        }, appConfig.game.frameDelay)
        return () => {
            clearTimeout(timeout)
        }
    }, [animationFrame, setAnimationFrame, props.animation])


    return (
        <Group x={props.x} y={props.y} scale={spriteConfig.scale}>
            {/*Character*/}
            <Image
                crop={cropSprite(animationFrame)}
                image={tileset1}
                height={spriteConfig.characterSpriteSize.height}
                width={spriteConfig.characterSpriteSize.width}
            />
            {/*Weapon*/}

            {/*Effects*/}


        </Group>
    )
}

export default PlayerEntity;
