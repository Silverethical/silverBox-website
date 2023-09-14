const animation = {
    configName: "animation",
    defaultValue: "emptyDefaultValue",
    type: "object | array",
    explanation:
        "Custom animation. It can ba an object or an array of objects.",
    config: [
        {
            configName: "name",
            defaultValue: "popUp",
            type: "string",
            explanation: "Animation name.",
        },
        {
            configName: "duration",
            defaultValue: ".3s",
            type: "string",
            explanation: "Animation duration.",
        },
        {
            configName: "timingFunction",
            defaultValue: "1",
            type: "string",
            explanation: "Animation timing function.",
        },
        {
            configName: "delay",
            defaultValue: "0s",
            type: "string",
            explanation: "Animation delay.",
        },
        {
            configName: "iterationCount",
            defaultValue: "1",
            type: "string",
            explanation: "Animation iteration count.",
        },
        {
            configName: "direction",
            defaultValue: "normal",
            type: "string",
            explanation: "Animation direction.",
        },
        {
            configName: "fillMode",
            defaultValue: "none",
            type: "string",
            explanation: "Animation fill mode.",
        },
    ],
};

export default animation;
