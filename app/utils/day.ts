import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import isYesterday from "dayjs/plugin/isYesterday";
import { week } from "../const/week";
import utc from "dayjs/plugin/utc";

export function dayJS(date: number) {
    dayjs.extend(isToday);
    dayjs.extend(isTomorrow);
    dayjs.extend(isYesterday);
    dayjs.extend(utc);

    if (dayjs((date * 1000)+18000).utcOffset(4).isTomorrow()) {
        return "Завтра";
    } else if (dayjs((date * 1000)+18000).utcOffset(4).isToday()) {
        return "Сегодня";
    } else if (dayjs(date * 1000).utcOffset(4).isToday()) {
        return "Вчера";
    } else {
        return week[dayjs(date * 1000).utc().format("d")];
    }
}
