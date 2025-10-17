const weekdayStyle = {
    JP_1char: ["日", "月", "火", "水", "木", "金", "土"],
    JP_2char: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
    EN_3char: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
} as const;

type Key = keyof typeof weekdayStyle;

class FormatWeekday {
    date: Date;
    style: Key;

    constructor(date: Date | string | number, style: Key = "JP_1char") {
        this.date = date instanceof Date ? date : new Date(date);
        this.style = style;
    }

    fromDate(): string {
        if (isNaN(this.date.getTime())) {
            return "";
        }
        const dayId = this.date.getDay();
        return weekdayStyle[this.style][dayId];
    }

    // new FormatWeekday を不要にすることができる
    static fromDate(date: Date | string | number, style: Key = "JP_1char"): string {
        return new FormatWeekday(date, style).fromDate();
    }
}

export default FormatWeekday;
