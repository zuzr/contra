/** Declaration file generated by dts-gen */

export = color_contrast_checker;

declare class color_contrast_checker {
    constructor();

    calculateLRGB(rgb: any): any;

    calculateLuminance(lRGB: any): any;

    calculateSRGB(rgb: any): any;

    check(colorA: any, colorB: any, fontSize: any, customRatio: any): any;

    checkPairs(pairs: any, customRatio: any): any;

    convertColorToSixDigit(hex: any): any;

    getContrastRatio(lumA: any, lumB: any): any;

    getRGBFromHex(color: any): any;

    hexToLuminance(color: any): any;

    isLevelAA(colorA: any, colorB: any, fontSize: any): any;

    isLevelAAA(colorA: any, colorB: any, fontSize: any): any;

    isLevelCustom(colorA: any, colorB: any, ratio: any): any;

    isValidColorCode(hex: any): any;

    isValidRatio(ratio: any): any;

    isValidSixDigitColorCode(hex: any): any;

    isValidThreeDigitColorCode(hex: any): any;

    verifyContrastRatio(ratio: any): any;

    verifyCustomContrastRatio(inputRatio: any, checkRatio: any): any;

}
