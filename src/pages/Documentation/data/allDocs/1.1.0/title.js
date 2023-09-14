const title = {
	configName: "title",
	defaultValue: "emptyDefaultValue",
	type: "string | object",
	explanation: "SilverBox title. It can be a string or an object.",
	config: [
		{
			configName: "text",
			defaultValue: "",
			type: "string",
			explanation: "Title text",
		},
		{
			configName: "alertIcon ",
			defaultValue: "",
			type: "string",
			explanation: `Predefined title icons including: "success", "error", "warning", "info", "question".`,
		},
		{
			configName: "customIcon",
			defaultValue: "",
			type: "string",
			explanation: `Path to a title custom icon. For example "customIcon: path/to/icon;" .`,
		},
		{
			configName: "customIconId",
			defaultValue: "",
			type: "string",
			explanation: "SilverBox title custom icon id.",
		},
		{
			configName: "customIconClassName",
			defaultValue: "",
			type: "string",
			explanation: "SilverBox title custom icon class.",
		},
		{
			configName: "customSvgIcon",
			defaultValue: "",
			type: "string",
			explanation:
				'SilverBox custom svg icon element. For example: "&lt;svg&gt; (your svg config here) &lt;/svg&gt;".',
		},
		{
			configName: "customSvgIconId",
			defaultValue: "",
			type: "string",
			explanation: "SilverBox custom svg icon element id.",
		},
		{
			configName: "customSvgIconClassName",
			defaultValue: "",
			type: "string",
			explanation: "SilverBox custom svg icon element class name.",
		},
	],
};

export default title;
