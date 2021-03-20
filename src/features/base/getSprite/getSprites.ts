import {IRect} from "konva/types/types";

export const KnightSpriteSize = {
    width: 16,
    height: 27,
}

export const KnightSpriteScale = {
    x: 4,
    y: 4
}

// type knightSpritesRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export const getRedKnightSprite = (frame: number): IRect => {
    return {
        x: 9 * 16 - 16 + frame * 16,
        y: 6 * 16 - 27,
        width: 16,
        height: 27,
    }
}
