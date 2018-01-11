import PropTypes from "prop-types";

const Clock = ({ lastUpdate, light }) => {
  const format = t =>
    `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
      t.getUTCSeconds()
    )}`;

  const pad = n => (n < 10 ? `0${n}` : n);

  return (
    <div className={light ? "light" : ""}>
      {format(new Date(lastUpdate))}
      <style jsx>{`
        div {
          padding: 15px;
          display: inline-block;
          color: #82fa58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
    </div>
  );
};

Clock.propTypes = {
  lastUpdate: PropTypes.number,
  light: PropTypes.bool,
};

export default Clock;