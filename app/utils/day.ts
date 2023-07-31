import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isYesterday from "dayjs/plugin/isYesterday";
import { mounth } from "../const/mouth";
import { week } from "../const/week";

export function dayJS(date: number) {
    dayjs.extend(isToday);
    dayjs.extend(isTomorrow);
    dayjs.extend(isYesterday);

    if (dayjs(date * 1000).isTomorrow()) {
        return "Завтра";
    } else if (dayjs(date * 1000).isToday()) {
        return "Сегодня";
    } else if (dayjs(date * 1000).isToday()) {
        return "Вчера";
    } else {
        return week[dayjs(date * 1000).format("d")];
    }
}
