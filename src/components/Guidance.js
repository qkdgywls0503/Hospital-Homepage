import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const ExpansionPanel = withStyles({
  root: {
    marginTop: "10px",
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    borderRadius: "0px 30px",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
      color: "#424242",
      backgroundColor: "#A9D0F5",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    width: "70%",

    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {
    backgroundColor: "#086A87",
    color: "#ffffff",
  },
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography>우리나라 고혈압 유병자 인구현황이 궁금해요 #1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            30세 이상의 30% 이상입니다. 그래서 한 총 천백만 명 정도가 되거든요.
            60세 이상은 절반이상, 70세 이상 어르신 중에서는 2/3 이상이
            고혈압이라고 생각하시면 됩니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <Typography>당뇨병의 정확한 정의가 궁금해요 #2</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            당뇨병은 말 자체로 보면 당이 뇨 소변을 빠져나온다는 뜻인데요. 실제로
            중요한 거는 뭐냐면 혈당이 올라가는 편이에요. 그래서 말이 조금 애매한
            부분이 있는데 혈당이 높은 상태를 총칭하는 말이 당뇨병인데 그러기
            때문에 당뇨병에는 다양한 병이 있어요. 그래서 우리가 1형 당뇨병, 2형
            당뇨병, 임신성 당뇨병 그리고 기타 특이형 이렇게 나뉘는데 좀 다양한
            부분이 있습니다. 공통분모는 고혈당 즉 혈당이 높다. 그렇게 됩니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <Typography>골다공증의 정의가 궁금해요 #3</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            골다공증이란 골량이 현저히 감소하여 뼈가 매우 약하고 푸석푸석해져서
            체중이나 기계적인 압력에 견디는 힘이 약해지고 실내에서 가볍게
            넘어지는 것 과 같은 미약한 충격에도 뼈가 쉽게 부러지는 질환을
            말합니다. 그러므로 골다공증 환자의 뼈는 치밀하지 못하고 구멍이 많이
            나 있는 모양으로 보이게 됩니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <Typography>
            근막통증 증후군의 발생 부위와 증상이 궁금해요 #4
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            근골격계의 통증을 호소하는 분들 중 약 30-75% 정도가 근막통증
            증후군을 가지고 있는 것으로 추정될 정도로 흔한 질환으로 몸의 모든
            근육에 발생할 수 있으나, 주로 뒷목이나 머리, 어깨 주변, 허리의
            근육에 잘 생깁니다. 흔히들 해당 부위가 묵직하게 짓누르듯이 아프고,
            좀 쉬면 좋아졌다가 과로하거나 특정 안 좋은 자세를 취하거나 스트레스
            등 심리적으로 긴장상태가 오래되면 증상이 악화됩니다. 많은 분들이
            후두부나 뒷목의 지속되는 통증으로 중풍이나 고혈압 등 뇌혈관계의
            이상을 걱정하여 병원을 찾게 되지만 이들의 대부분이 근막통증
            증후군으로 이 질환은 뇌나 심장 등과는 전혀 무관합니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <ExpansionPanelSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
        >
          <Typography>
            앉았다 일어나면 너무 어지러워요 기립성 저혈압인지 확인하는 방법이
            있나요 #5
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            기립성 저혈압의 유무를 확인 하는 방법은 똑바로 누운 자세와 선
            자세에서의 혈압을 비교 측정하는 것입니다. 먼저 누운 자세에서 혈압을
            측정하고 기립 한 후 적어도 2분 경과한 후의 혈압을 측정합니다. 적어도
            2분 이상 선 후에 지속적으로 수축기 혈압이 20mmHg, 이완기 혈압이
            10mmHg 보다 더 떨어지면서 분당 15 회 이상의 적절한 맥박 수의 증가가
            없으면 혈압, 맥박 등을 기본적으로 조절하는 신경인 자율 신경의 기능
            이상에 의한 “기립성 저혈압” 으로 생각할 수 있습니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <ExpansionPanelSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
        >
          <Typography>급성위염 원인이 궁금해요 #6</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            급성 위염은 약물(특히, 소염진통제), 알코올, 내과적 혹은 외과적 질환
            때문에 생기는 스트레스, 독감 바이러스 혹은 세균 및 진균에 의한 감염
            그리고 문맥압 항진 등에 의해서 발생할 수 있고 이보다 덜 흔한
            원인으로 부식성 화합물의 복용과 방사선에 의한 경우가 있을 수
            있습니다.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
