//language=葡萄牙文
var iFormat ={
    "eras": [
        "antes de Cristo",
        "depois de Cristo"
    ],
    "months": [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ],
    "shortMonths": [
        "jan",
        "fev",
        "mar",
        "abr",
        "mai",
        "jun",
        "jul",
        "ago",
        "set",
        "out",
        "nov",
        "dez"
    ],
    "weekdays": [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ],
    "shortWeekdays": [
        "dom",
        "seg",
        "ter",
        "qua",
        "qui",
        "sex",
        "sáb"
    ],
    "veryShortWeekdays": [
        "D",
        "S",
        "T",
        "Q",
        "Q",
        "S",
        "S"
    ],
    "ampms": [
        "AM",
        "PM"
    ],
    "datePatterns": [
        "EEEE, d 'de' MMMM 'de' y",
        "d 'de' MMMM 'de' y",
        "dd/MM/yy",
        "dd/MM/yy"
    ],
    "timePatterns": [
        "HH:mm:ss zzzz",
        "HH:mm:ss z",
        "HH:mm:ss",
        "HH:mm"
    ],
    "dateTimePattern": "{date} {time}"
};
Object.defineProperty(exports, "__esModule", {value: true});
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
iFormat = _interopRequireDefault(iFormat);
var data = {
    "today": "hoje",
    "now": "agora",
    "ok": "OK",
    "clear": "Clear",
    "month": "mês",
    "year": "ano",
    "previousMonth": "mês passado(PageUp)",
    "nextMonth": "próximo mês(PageDown)",
    "monthSelect": "Choose a month",
    "yearSelect": "Choose a year",
    "decadeSelect": "Choose a decade",
    "yearFormat": "y",
    "monthFormat": "M",
    "dateFormat": "d 'de' MMM 'de' y",
    "previousYear": "ano passado(Control + left key)",
    "nextYear": "próximo ano(Control + right key)",
    "previousDecade": "Last decade",
    "nextDecade": "Next decade",
    "previousCentury": "Last century",
    "nextCentury": "Next century"
};
data.format = iFormat["default"];
exports["default"] = data;
module.exports = exports["default"];
