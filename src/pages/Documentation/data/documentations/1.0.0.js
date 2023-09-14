import addButtonConfig from "./chunks/buttons_1.0.0.js";
import sortDocumentation from "../../helpers/sortDocumentation.js";

// Docs imports
import alertIcon from "../allDocs/1.0.0/alertIcon.js";
import direction from "../allDocs/1.0.0/direction.js";
import customIcon from "../allDocs/1.0.0/customIcon.js";
import customIconId from "../allDocs/1.0.0/customIconId.js";
import customIconClassName from "../allDocs/1.0.0/customIconClassName.js";
import timer from "../allDocs/1.0.0/timer.js";
import position from "../allDocs/1.0.0/position.js";
import theme from "../allDocs/1.0.0/theme.js";
import title from "../allDocs/1.0.0/title.js";
import centerContent from "../allDocs/1.0.0/centerContent.js";
import html from "../allDocs/1.0.0/html.js";
import text from "../allDocs/1.0.0/text.js";
import footer from "../allDocs/1.0.0/footer.js";
import showCloseButton from "../allDocs/1.0.0/showCloseButton.js";
import removeSilverBox from "../allDocs/1.0.0/removeSilverBox.js";
import removeLoading from "../allDocs/1.0.0/removeLoading.js";
import buttonsDirection from "../allDocs/1.0.0/buttonsDirection.js";
import input from "../allDocs/1.0.0/input.js";
import silverBoxId from "../allDocs/1.0.0/silverBoxId.js";
import silverBoxClassName from "../allDocs/1.0.0/silverBoxClassName.js";
import customSvgIcon from "../allDocs/1.0.0/customSvgIcon.js";
import customSvgIconId from "../allDocs/1.0.0/customSvgIconId.js";
import customSvgIconClassName from "../allDocs/1.0.0/customSvgIconClassName.js";

const documentation = [
    alertIcon,
    direction,
    customIcon,
    customIconId,
    customIconClassName,
    timer,
    position,
    theme,
    title,
    centerContent,
    html,
    text,
    footer,
    showCloseButton,
    removeSilverBox,
    removeLoading,
    buttonsDirection,
    silverBoxId,
    silverBoxClassName,
    customSvgIcon,
    customSvgIconId,
    customSvgIconClassName,
    input,
];

// add confirm/deny/cancel button to documentation
addButtonConfig(["Confirm", "Deny", "Cancel"], documentation);

// sort documentation alphabetically
const sortedDocs = sortDocumentation(documentation);

export default sortedDocs;
