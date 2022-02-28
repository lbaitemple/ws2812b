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
//% weight=20 color=#0855AA icon="\uf109" block="NeoLED"
namespace NeoLED {
         /**
         * Send all the changes to the strip.
         */
        //% block="send RGB $rgb at Digital PIN $pin "
      export function show(rgb: number, pin: DigitalInOutPin) {
            // only supported in beta
            // ws2812b.setBufferMode(this.pin, this._mode);
            this.setPixelRGB(rgb);
            ws2812b.sendBuffer(this.buf, pin);
     }

    
     private setPixelRGB(rgb: number): void {

            let stride = this._mode === NeoPixelMode.RGBW ? 4 : 3;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = 128;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(red, green, blue)
        }
        private setBufferRGB(red: number, green: number, blue: number): void {
            this.buf[offset + 0] = red;
            this.buf[offset + 1] = green;
            this.buf[offset + 2] = blue;
        }

}
