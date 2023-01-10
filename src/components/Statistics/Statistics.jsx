import PropTypes from 'prop-types';

import { Statistic, StatisticList, StatistItem } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Statistic>
      <h2>{title}</h2>

      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatistItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatistItem>
        ))}
      </StatisticList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
