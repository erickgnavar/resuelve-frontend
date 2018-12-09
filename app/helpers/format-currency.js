import { helper } from '@ember/component/helper';

export function formatCurrency([value, currencyCode, conversion]) {
    if (conversion === null) {
      return '';
    }
    currencyCode = currencyCode || 'mxn';
    // amount value is in cents by API specification
    value = value / 100;
    let symbol = 'Mex$';
    if (currencyCode === 'usd') {
      value = conversion.mxn2usd * value;
      symbol = '$';
    }
    return `${symbol} ${value.toFixed(2)}`;
}

export default helper(formatCurrency);
