export const sendOrder = async (orderData: {
	name: string;
	phone: number;
	measurement: number;
	estimatedPrice: number;
	file: File;
}) => {
	const formData = new FormData();
	const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL;
	formData.append(
		"payload_json",
		JSON.stringify({
			embeds: [
				{
					title: "📦 • Novo Pedido",
					description: "### Informações do Pedido:",
					color: 0,
					footer: {
						text: "Printiva | Linha Pets/Paws",
					},
					fields: [
						{
							name: "🙍 |  **Nome**",
							value: `${orderData.name}`,
							inline: true,
						},
						{
							name: "📱 | **Telefone**",
							value: `${orderData.phone}`,
							inline: true,
						},
						{
							name: "📏 | **Medida**",
							value: `${orderData.measurement}x${orderData.measurement}cm`,
							inline: true,
						},
						{
							name: "💰 | **Preço Estimado**",
							value: `R$${orderData.estimatedPrice},00`,
							inline: false,
						},
					],
					image: {
						url: `attachment://pedido.png`,
					},
				},
			],
		})
	);

	formData.append("file", orderData.file, "pedido.png");

	const res = await fetch(webhookUrl, {
		method: "POST",
		body: formData,
	});

	if (!res.ok) {
		console.error("Failed:", await res.text());
	}
};
