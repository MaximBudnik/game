import {IRect} from "konva/types/types";

export const KnightSpriteSize = {
    width: 16,
    height: 27,
}

export const KnightSpriteScale = {
    x: 4,
    y: 4
}

export const getKnightSprite = (frame: number): IRect => {
    return {
        x: 9 * 16 - 16 + frame * 16,
        y: 6 * 16 - 27,
        width: 16,
        height: 27,
    }
}
