const timer = {
    configName: "timer",
    defaultValue: "emptyDefaultValue",
    type: "number | string | object",
    explanation:
        "SilverBox closes after given time in milliseconds or seconds. It can get a number representing the timer duration, or an object with other configs",
    config: [
        {
            configName: "duration",
            defaultValue: 0,
            type: "number | string",
            explanation: "Timer duration in milliseconds or seconds.",
        },
        {
            configName: "pauseOnHover",
            defaultValue: true,
            type: "boolean",
            explanation: "Pause timer when mouse hovers on SilverBox.",
        },
        {
            configName: "showBar",
            defaultValue: true,
            type: "boolean",
            explanation: "Show timer bar bellow SilverBox.",
        },
    ],
};

export default timer;
