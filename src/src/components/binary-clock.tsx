import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';

export const BinaryClock = component$(() => {
    const store = useStore({
        now: {},
        hour: {},
        minute: {},
        second: {},
    });

    useClientEffect$(() => {
        const update = () => {
            const now = new Date();

            store.now = now.toString();
            store.hour = now.getHours();
            store.minute = now.getMinutes();
            store.second = now.getSeconds();
        }
        update();
        const tmrId = setInterval(update, 1000);
        return () => clearInterval(tmrId);
    });

    return (
        <table class="binclock">
            {/*
            <tr>
                <td class={ bc_on: isOn(h, 8, true), bc_off: isOff(h, 8, true) }></td>
                <td class={ bc_on: isOn(h, 8, false), bc_off: isOff(h, 8, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(m, 8, true), bc_off: isOff(m, 8, true) }></td>
                <td class={ bc_on: isOn(m, 8, false), bc_off: isOff(m, 8, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(s, 8, true), bc_off: isOff(s, 8, true) }></td>
                <td class={ bc_on: isOn(s, 8, false), bc_off: isOff(s, 8, false) }></td>
            </tr>
            <tr>
                <td class={ bc_on: isOn(h, 4, true), bc_off: isOff(h, 4, true) }></td>
                <td class={ bc_on: isOn(h, 4, false), bc_off: isOff(h, 4, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(m, 4, true), bc_off: isOff(m, 4, true) }></td>
                <td class={ bc_on: isOn(m, 4, false), bc_off: isOff(m, 4, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(s, 4, true), bc_off: isOff(s, 4, true) }></td>
                <td class={ bc_on: isOn(s, 4, false), bc_off: isOff(s, 4, false) }></td>
            </tr>
            <tr>
                <td class={ bc_on: isOn(h, 2, true), bc_off: isOff(h, 2, true) }></td>
                <td class={ bc_on: isOn(h, 2, false), bc_off: isOff(h, 2, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(m, 2, true), bc_off: isOff(m, 2, true) }></td>
                <td class={ bc_on: isOn(m, 2, false), bc_off: isOff(m, 2, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(s, 2, true), bc_off: isOff(s, 2, true) }></td>
                <td class={ bc_on: isOn(s, 2, false), bc_off: isOff(s, 2, false) }></td>
            </tr>
            <tr>
                <td class={ bc_on: isOn(h, 1, true), bc_off: isOff(h, 1, true) }></td>
                <td class={ bc_on: isOn(h, 1, false), bc_off: isOff(h, 1, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(m, 1, true), bc_off: isOff(m, 1, true) }></td>
                <td class={ bc_on: isOn(m, 1, false), bc_off: isOff(m, 1, false) }></td>
                <td width="8"></td>
                <td class={ bc_on: isOn(s, 1, true), bc_off: isOff(s, 1, true) }></td>
                <td class={ bc_on: isOn(s, 1, false), bc_off: isOff(s, 1, false) }></td>
            </tr>
            */}
            <tr>
                <td colspan="8" align="center" ng-bind="currentTime | date:'hh.mm.ss'">{ store.now }</td>
            </tr>
        </table>
    );
});
