// copyies the specefic given text
const copyArgument = (element) => {
	navigator.clipboard.writeText(element.textContent);
};

export default copyArgument;
