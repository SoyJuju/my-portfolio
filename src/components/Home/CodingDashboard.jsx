import '../../styles/main.css';

import Codewars from './Codewars';
import Leetcode from './Leetcode';

export default function CodingDashboard() {
  return (
    <section className="dashboard | container padding-block-200">
      <h2 className="fs-small-700 fw-medium padding-block-600">Coding Stats</h2>
      <div className="two-columns">
        <Codewars />
        <Leetcode />
      </div>
    </section>
  );
}
