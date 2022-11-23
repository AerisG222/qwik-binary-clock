import { component$, useStore, useClientEffect$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './binary-clock.css?inline';

export const BinaryClock = component$(() => {
    useStylesScoped$(styles);

    const classOff = 'bc_off';
    const classOn = 'bc_on';

    const store = useStore({
        now: {},
        hour: [[],[]],
        minute: [[],[]],
        second: [[],[]],
    });

    useClientEffect$(() => {
        const update = () => {
            const now = new Date();

            store.now = now.toLocaleTimeString();

            store.hour = getTimePart(now.getHours());
            store.minute = getTimePart(now.getMinutes());
            store.second = getTimePart(now.getSeconds());
        }

        update();

        const tmrId = setInterval(update, 1000);
        return () => clearInterval(tmrId);

        function getTimePart(value: number): string[][] {
            const result:string[][] = [
                [classOff, classOff, classOff, classOff],
                [classOff, classOff, classOff, classOff]
            ];
            const paddedValue = `${value}`.padStart(2, '0');
            const tens = parseInt(paddedValue[0], 10);
            const ones = parseInt(paddedValue[1], 10);

            for(let t = 0; t <= 1; t++)
            {
                const digit = t === 0 ? tens : ones;

                for(let o = 0; o <= 3; o++)
                {
                    result[t][o] = ((digit & 2**o) === 2**o) ? classOn : classOff;
                }
            }

            return result;
        }
    });

    return (
        <table class="binclock">
            <tr>
                <td className={ store.hour[0][3] }></td>
                <td className={ store.hour[1][3] }></td>
                <td width="8"></td>
                <td className={ store.minute[0][3] }></td>
                <td className={ store.minute[1][3] }></td>
                <td width="8"></td>
                <td className={ store.second[0][3] }></td>
                <td className={ store.second[1][3] }></td>
            </tr>
            <tr>
                <td className={ store.hour[0][2] }></td>
                <td className={ store.hour[1][2] }></td>
                <td width="8"></td>
                <td className={ store.minute[0][2] }></td>
                <td className={ store.minute[1][2] }></td>
                <td width="8"></td>
                <td className={ store.second[0][2] }></td>
                <td className={ store.second[1][2] }></td>
            </tr>
            <tr>
                <td className={ store.hour[0][1] }></td>
                <td className={ store.hour[1][1] }></td>
                <td width="8"></td>
                <td className={ store.minute[0][1] }></td>
                <td className={ store.minute[1][1] }></td>
                <td width="8"></td>
                <td className={ store.second[0][1] }></td>
                <td className={ store.second[1][1] }></td>
            </tr>
            <tr>
                <td className={ store.hour[0][0] }></td>
                <td className={ store.hour[1][0] }></td>
                <td width="8"></td>
                <td className={ store.minute[0][0] }></td>
                <td className={ store.minute[1][0] }></td>
                <td width="8"></td>
                <td className={ store.second[0][0] }></td>
                <td className={ store.second[1][0] }></td>
            </tr>
            <tr>
                <td colspan="8" align="center" ng-bind="currentTime | date:'hh.mm.ss'">{ store.now }</td>
            </tr>
        </table>
    );
});
