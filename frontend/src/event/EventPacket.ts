import { Packet, PacketData } from "../socket/packets/Packet";
import Event from "./Event";

export default class EventPacket extends Event {

    private packet: Packet;
    public callback: (() => void) | undefined;
    public isBundle: boolean;

    constructor(packet: Packet, isBundle: boolean) {
        super();
        this.packet = packet;
        this.callback = undefined;
        this.isBundle = isBundle;
    }

    getPacket() {
        return this.packet;
    }

    setPacket(packet: Packet) {
        this.packet = packet;
    }

    setData(data: PacketData) {
        this.packet.data = data;
    }
}