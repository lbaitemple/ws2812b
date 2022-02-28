//% weight=20 color=#0855AA icon="\uf109" block="WS2812b"
namespace ws2812b {
    //% block="send buffer"
    //% shim=sendBufferAsm
    export function sendBuffer(buf: Buffer, pin: DigitalInOutPin) {
    }

     //% block="send buffermode"
    //% shim=setBufferMode
    export function setBufferMode(pin: DigitalInOutPin, mode: number) {

    }
}
