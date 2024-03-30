const baseUrl =
	process.env.NODE_ENV === "production"
		? "https://indice-dynamic.envytheme.com"
		: "http://localhost:3000";

export default baseUrl;
