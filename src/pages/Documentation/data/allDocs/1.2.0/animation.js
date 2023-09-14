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
            defaultValue: "300ms",
            type: "string | number",
            explanation: "Animation duration in milliseconds or seconds.",
        },
        {
            configName: "timingFunction",
            defaultValue: "1",
            type: "string",
            explanation: "Animation timing function.",
        },
        {
            configName: "delay",
            defaultValue: "0ms",
            type: "string | number",
            explanation: "Animation delay in milliseconds or seconds.",
        },
        {
            configName: "iterationCount",
            defaultValue: "1",
            type: "string | number",
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
