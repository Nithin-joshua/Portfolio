// This file formats simple year-month strings into readable date ranges.
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

function formatSingleDate(value) {
  if (!value) {
    return '';
  }

  const [yearText, monthText] = value.split('-');
  const year = Number(yearText);
  const monthIndex = Number(monthText) - 1;

  if (!year || Number.isNaN(monthIndex) || !monthNames[monthIndex]) {
    return value;
  }

  return `${monthNames[monthIndex]} ${year}`;
}

function formatDateRange(start, end) {
  const startText = formatSingleDate(start);
  const endText = formatSingleDate(end);

  if (startText && endText) {
    return `${startText} - ${endText}`;
  }

  return startText || endText;
}

export default formatDateRange;
