export const sendFormData = async (data) =>
	fetch("/api/mailData", {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	}).then((res) => {
		if (!res.ok) throw new Error("faild to send messsage");
		return res.json();
	});