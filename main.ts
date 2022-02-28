/**
 * Well known colors for a NeoPixel strip
 */
enum NeoPixelColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

/**
 * Different modes for RGB or RGB+W NeoPixel strips
 */
enum NeoPixelMode {
    //% block="RGB (GRB format)"
    RGB = 1,
    //% block="RGB+W"
    RGBW = 2,
    //% block="RGB (RGB format)"
    RGB_RGB = 3
}
//% weight=20 color=#0855AA icon="\uf109" block="WS2812b"
namespace ws2812b {
    //% block="send buffer"
    //% block="send buffer $buf at Digital PIN $pin "
    export function sendBuffer(buf: Buffer, pin: DigitalInOutPin) {
    }

     //% block="send buffermode"
    //% block="send buffermode $mode at Digital PIN $pin "
    export function setBufferMode(pin: DigitalInOutPin, mode: number) {

    }
}
