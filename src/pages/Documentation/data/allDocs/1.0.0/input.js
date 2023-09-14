const input = {
    configName: "input",
    defaultValue: "emptyDefaultValue",
    type: "object | array",
    explanation: `Input configuration. Can be an "object" or an "array" of "objects".`,
    config: [
        {
            configName: "label",
            defaultValue: "",
            type: "string",
            explanation: "Input label.",
        },
        {
            configName: "type",
            defaultValue: '"text"',
            type: "string",
            explanation: `Input type. It can be "text", "number", "textarea", ...`,
        },
        {
            configName: "placeHolder",
            defaultValue: "",
            type: "string",
            explanation: "Input place holder.",
        },
        {
            configName: "placeHolderFontSize",
            defaultValue: "",
            type: "string",
            explanation: "Input placeHolder font size.",
        },

        {
            configName: "hint",
            defaultValue: "",
            type: "string",
            explanation: "Input hint at the bottom.",
        },
        {
            configName: "readOnly",
            defaultValue: false,
            type: "boolean",
            explanation: "Input readonly attribute.",
        },
        {
            configName: "width",
            defaultValue: '"100%"',
            type: "string",
            explanation: "Input width.",
        },
        {
            configName: "height",
            defaultValue: '"100%"',
            type: "string",
            explanation: "Input height.",
        },
        {
            configName: "maxLength",
            defaultValue: "",
            type: "string",
            explanation: "Input maxlength attribute.",
        },
        {
            configName: "textAlign",
            defaultValue: "",
            type: "string",
            explanation: "Input text align.",
        },
        {
            configName: "fontSize",
            defaultValue: "",
            type: "string",
            explanation: "Input font size.",
        },
        {
            configName: "multiplyBy",
            defaultValue: 1,
            type: "number",
            explanation: "Multiplies the input.",
        },
        {
            configName: "numberOnly",
            defaultValue: false,
            type: "boolean",
            explanation: "Accept only numbers from user.",
        },
        {
            configName: "name",
            defaultValue: "",
            type: "string",
            explanation: "Input name attribute.",
        },
        {
            configName: "className",
            defaultValue: "",
            type: "string",
            explanation: "Input class.",
        },
        {
            configName: "id",
            defaultValue: "",
            type: "string",
            explanation: "Input id.",
        },
        {
            configName: "value",
            defaultValue: "",
            type: "string",
            explanation: "Input value.",
        },

        // {
        //     configName: "select",
        //     defaultValue: "",
        //     type:"object",
        //     explanation: `gets an array of objects that have 2 keys: "text" and "value". "text" is the textContent of the option, "value" is the value of option. If value is not given, the "text"'s value will be set as the value.`,
        // },
    ],
}

export default input;