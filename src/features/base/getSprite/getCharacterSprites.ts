import {IRect} from "konva/types/types";
import {spriteConfig} from "../../../config/spriteConfig";

export const KnightSpriteSize = {
    width: 16,
    height: 27,
}

export const KnightSpriteScale = {
    x: 4,
    y: 4
}

// type knightSpritesRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type getSpriteF = (frame: number) => IRect

const width = spriteConfig.characterSpriteSize.width
const height = spriteConfig.characterSpriteSize.height

const buildGetCharacterSpriteFunction = (x: number, y: number, frame: number): IRect => {
    return {
        x: x * 16 - width + frame * 16,
        y: y * 16 - height,
        width,
        height
    }
}
export const getGirlSprite: getSpriteF = (frame) => buildGetCharacterSpriteFunction(9, 2, frame)
export const getBoySprite: getSpriteF = (frame) => buildGetCharacterSpriteFunction(9, 4, frame)

export const getRedKnightSprite: getSpriteF = (frame) => buildGetCharacterSpriteFunction(9, 6, frame)
export const getOrangeKnightSprite: getSpriteF = (frame) => buildGetCharacterSpriteFunction(9, 8, frame)

export const getBlueDragonSprite: getSpriteF = (frame) => buildGetCharacterSpriteFunction(9, 14, frame)
export const getGreenDragonSprite: getSpriteF = (frame) => buildGetCharacterSpriteFunction(9, 16, frame)

