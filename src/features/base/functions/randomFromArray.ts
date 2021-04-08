export const randomFromArray = <T extends any>(array:Array<T>):T =>{
    return array[Math.floor(Math.random() * array.length)];
}
