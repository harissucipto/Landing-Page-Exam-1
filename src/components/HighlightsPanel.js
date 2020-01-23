import React from "react";
import ItemHighLight from "./ItemHighLight";
import "./HighlightsPanel.css";
import {
  faComments,
  faPaintBrush,
  faCubes,
  faBullhorn,
  faSlidersH,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

const listContent = [
  {
    icon: faComments,
    title: "Consult",
    description:
      "Co-create, design thinking; strengthen infrastructure resist granular Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress"
  },
  {
    icon: faPaintBrush,
    title: "Design",
    description:
      "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile  issue outcomes vibrant boots on the ground sustainable."
  },
  {
    icon: faCubes,
    title: "Develop",
    description:
      "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
  },
  {
    icon: faBullhorn,
    title: "Marketing",
    description:
      "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
  },
  {
    icon: faSlidersH,
    title: "Manage",
    description:
      "Change-makers innovation or shared unit of analysis. Overcome injustic outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
  },
  {
    icon: faChartLine,
    title: "Evolve",
    description:
      "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass  incarceration. Outcomes big data, fairness, social game-changer"
  }
];

const HighlightsPanel = () => {
  return (
    <div className="highlights-panel">
      <div className="highlights-title">
        <p className="h1-g">How Can I Help You?</p>
        <p className="h3-g">
          Our work then targeted, best practices outcomes social innovation
          synergy. Venture philanthropy, revolutionary inclusive policymaker
          relief. User-centered program areas scale
        </p>
      </div>
      <div className="highlight-list-container">
        {listContent.map((item, index) => (
          <ItemHighLight key={`highlight${index + 1}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsPanel;
