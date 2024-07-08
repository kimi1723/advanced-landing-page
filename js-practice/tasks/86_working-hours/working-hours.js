const DAYS_ORDER = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const sortByDays = (data) =>
  data.toSorted(({ day: dayA }, { day: dayB }) => {
    const aIndex = DAYS_ORDER.findIndex((day) => day === dayA);
    const bIndex = DAYS_ORDER.findIndex((day) => day === dayB);

    return aIndex - bIndex;
  });

const groupByHours = (data) => {
  const groupedByHours = [];

  data.forEach(({ day, from, to }, index) => {
    const timeWindowIndex = groupedByHours.findIndex(
      ({ from: groupedFrom, to: groupedTo }) => groupedFrom === from && groupedTo === to
    );
    const isCorrectNextDay = index !== data.length - 1 && DAYS_ORDER[index + 1] === data[index + 1].day;

    if (timeWindowIndex === -1 || !isCorrectNextDay) return groupedByHours.push({ day, from, to });

    const grouped = groupedByHours[timeWindowIndex];

    grouped.day = grouped.day.concat(` ${day}`);
  });

  return groupedByHours;
};

const humanizeFormat = (data) =>
  data.map(({ day, from, to }) => {
    const days = day.split(' ');
    const daysOutput = (days.length < 2 ? day : `${days[0]} - ${days[days.length - 1]}`).toUpperCase();
    const hoursOutput = `${from} - ${to}`.toUpperCase();

    return `${daysOutput}: ${hoursOutput}`;
  });

export const workingHours = (data) => {
  if (data.length < 1) return data;

  const sortedByDays = sortByDays(data);
  const groupedByHours = groupByHours(sortedByDays);
  const humanizedFormat = humanizeFormat(groupedByHours);

  return humanizedFormat;
};
