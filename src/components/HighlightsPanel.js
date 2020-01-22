import React from "react";
import ItemHighLight from "./ItemHighLight";

const listContent = [
  {
    icon: "",
    title: "Consult",
    description:
      "Co-create, design thinking; strengthen infrastructure resist granular Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress"
  },
  {
    icon: "",
    title: "Design",
    description:
      "Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile  issue outcomes vibrant boots on the ground sustainable."
  },
  {
    icon: "",
    title: "Develop",
    description:
      "Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking."
  },
  {
    icon: "",
    title: "Marketing",
    description:
      "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective."
  },
  {
    icon: "",
    title: "Manage",
    description:
      "Change-makers innovation or shared unit of analysis. Overcome injustic outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social."
  },
  {
    icon: "",
    title: "Evolve",
    description:
      "Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass  incarceration. Outcomes big data, fairness, social game-changer"
  }
];

const HighlightsPanel = () => {
  return (
    <div>
      <p>How Can I Help You?</p>
      <p>
        Our work then targeted, best practices outcomes social innovation
        synergy. Venture philanthropy, revolutionary inclusive policymaker
        relief. User-centered program areas scale
      </p>
      <div>
        {listContent.map((item, index) => (
          <ItemHighLight key={`highlight${index + 1}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HighlightsPanel;
