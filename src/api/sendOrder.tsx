export const sendOrder = async (orderData: {
	name: string;
	phone: number;
	measurement: number;
	file: File;
}) => {
	const formData = new FormData();
	formData.append("file", orderData.file);
	formData.append("name", orderData.name);
	formData.append("phone", orderData.phone ? orderData.phone.toString() : "");
	formData.append("measurement", orderData.measurement.toString());

	const res = await fetch("http://localhost:3001/send-with-image", {
		method: "POST",
		body: formData,
	});

	if (!res.ok) {
		console.error("Failed:", await res.text());
	}
};
