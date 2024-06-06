import * as moment from 'moment';
import CheckInformation from "../check_information";
function formatBuddhist(date, format) {
  const _m = moment(date);
  var christianYear = _m.format('YYYY');
  var buddhishYear = (parseInt(christianYear) + 543).toString();
  if (CheckInformation.isNullOrEmpty(format)) {
    return new Date(_m);
  } else {
    return _m.format(format.replace('YYYY', buddhishYear).replace('YY', buddhishYear.substring(2, 4)).replace('yyyy', buddhishYear).replace('yy', buddhishYear.substring(2, 4))).replace(christianYear, buddhishYear);
  }
}
moment.fn.formatBuddhist = formatBuddhist;
moment.prototype.formatBuddhist = formatBuddhist;
export default moment;