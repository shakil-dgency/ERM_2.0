// import { mailOptions, transporter } from "@/config/nodemailer";
import nodemailer from "nodemailer";

const generateEmail = (data) => {
	const stringData = Object.entries(data).reduce((str, [key, val]) => (str += `${key} : \n${val} \n \n`), "");

	const htmlData = Object.entries(data).reduce(
		(str, [key, val]) =>
			(str += `<h1 class="form-heading" align="left">${key.charAt(0).toUpperCase() + key.slice(1)}:</h1><p class="form-answer"> ${val}</p>`),
		""
	);

	return {
		text: stringData,
		html: `<!DOCTYPE html> <html> <head> <title></title> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <style type="text/css"> body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table { border-collapse: collapse !important; } body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; } @media screen and (max-width: 525px) { .wrapper { width: 100% !important; max-width: 100% !important; } .responsive-table { width: 100% !important; } .padding { padding: 10px 5% 15px 5% !important; } .section-padding { padding: 0 15px 50px 15px !important; } } .form-container { margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc; } .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; } .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; } div[style*="margin: 16px 0;"] { margin: 0 !important; } </style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div> <table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>You Just Received a New Lead!</h2> <div class="form-container">${htmlData}</div> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </body> </html>`,
	};
};


//to send a auto reply
const sendAutoReply = async (recipientEmail, isForm, name) => {
	// Create a Nodemailer transporter
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PASS,
		},
	});

	// Auto-reply email content
	const autoReplyMessage = `
	  ${
			isForm === "partner-program"
				? `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> <style> body { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } .para_body p { margin-bottom: 30px; color: #2a2a2a; } .conclusion { line-height: 12px; color: #2a2a2a; } .name { font-weight: 600; } .designation { color: #9a9a9a; } </style> </head> <body> <div class=""> <div class="para_body"> <p>Dear ${
						name.split(" ")[0].charAt(0).toUpperCase() + name.split(" ")[0].slice(1)
				  },</p> <p> Thank you for reaching out and expressing interest in our Client Referral Partner Program at Escape Room Marketer! We're excited about the possibility of collaborating with you to drive mutual success. </p> <p> Our program is designed to reward partners like you for referring escape room businesses to us. With the potential to earn up to 10% monthly revenue for each marketing client you refer, it's a fantastic opportunity to leverage your network and generate additional income. </p> <p> By making warm introductions and facilitating connections, you can play a vital role in helping escape room owners elevate their businesses with our proven marketing solutions. Rest assured, we'll handle the rest, keeping you informed every step of the way with comprehensive sales stage reporting. </p> <p> We appreciate your interest and look forward to discussing the details further. Please feel free to reach out if you have any questions or would like to explore this opportunity in more detail. </p> <p> Thank you again for considering our Client Referral Partner Program. We're excited about the possibility of working together and creating mutually beneficial partnerships. </p> </div> <div class="conclusion"> <p>Best regards,</p> <p class="name">Hamid Shawon</p> <p class="designation">Captain, Escape Room Marketer</p> </div> </div> </body> </html>`
				: isForm === "pricing"
				? `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> <style> body { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } .para_body p { margin-bottom: 30px; color: #2a2a2a; } .conclusion { line-height: 12px; color: #2a2a2a; } .name { font-weight: 600; } .designation { color: #9a9a9a; } </style> </head> <body> <div class=""> <div class="para_body"> <p>Dear ${
						name.split(" ")[0].charAt(0).toUpperCase() + name.split(" ")[0].slice(1)
				  },</p> <p> Thank you for exploring our services and requesting your free marketing plan from Escape Room Marketer! We're thrilled that you're considering us to help elevate your escape room business. </p> <p> It's great to see that you've taken the time to explore our pricing calculator and review the pricing for each service. We understand that transparency is crucial, and we're committed to providing clear and competitive pricing for our valued clients like you. </p> <p> Our team is now working diligently to create a personalized marketing plan tailored specifically to your needs and goals. You can expect to receive it in your inbox within 48 hours. </p> <p> In the meantime, if you have any questions or need further assistance, please feel free to reach out to us directly at <b>+1 (707) 681-5030</b>. We're here to help! </p> <p> Thank you once again for considering Escape Room Marketer. We're excited about the opportunity to collaborate with you and help drive success for your escape room business! </p> </div> <div class="conclusion"> <p>Best regards,</p> <p class="name">Hamid Shawon</p> <p class="designation">Captain, Escape Room Marketer</p> </div> </div> </body> </html>`
				: isForm === "contact"
				? `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> <style> body { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } .para_body p { margin-bottom: 30px; color: #2a2a2a; } .conclusion { line-height: 12px; color: #2a2a2a; } .name { font-weight: 600; } .designation { color: #9a9a9a; } </style> </head> <body> <div class=""> <div class="para_body"> <p>Dear ${
						name.split(" ")[0].charAt(0).toUpperCase() + name.split(" ")[0].slice(1)
				  },</p> <p> Thank you for reaching out to us! We're thrilled to hear from you and excited about the opportunity to help you grow your escape room business. </p> <p> Our team will review your message and get back to you as soon as possible. In the meantime, feel free to explore our website to learn more about our services and how we can assist you in achieving your goals. </p> <p> If you have any urgent inquiries or additional information to share, please don't hesitate to contact us directly at <b>+1 (707) 681-5030</b>. </p> <p> Thanks again for considering us as your partner. We look forward to the possibility of working together and helping your escape room business thrive! </p> </div> <div class="conclusion"> <p>Best regards,</p> <p class="name">Hamid Shawon</p> <p class="designation">Captain, Escape Room Marketer</p> </div> </div> </body> </html>`
				: isForm === "free-marketing"
				? `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Document</title> <style> body { font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; } .para_body p { margin-bottom: 30px; color: #2a2a2a; } .conclusion { line-height: 12px; color: #2a2a2a; } .name { font-weight: 600; } .designation { color: #9a9a9a; } </style> </head> <body> <div class=""> <div class="para_body"> <p>Dear ${
						name.split(" ")[0].charAt(0).toUpperCase() + name.split(" ")[0].slice(1)
				  },</p> <p> Thank you for requesting your free marketing plan from Escape Room Marketer! We're delighted that you've taken this step toward boosting your escape room business. </p> <p> Our team is now working diligently to create a personalized marketing plan tailored specifically to your needs and goals. You can expect to receive it in your inbox within 48 hours. </p> <p> In the meantime, if you have any questions or need further assistance, please feel free to reach out to us directly at <b>+1 (707) 681-5030</b>. We're here to help! </p> <p> We appreciate your interest in our services and look forward to the opportunity to work with you and help your escape room business thrive. </p> </div> <div class="conclusion"> <p>Best regards,</p> <p class="name">Hamid Shawon</p> <p class="designation">Captain, Escape Room Marketer</p> </div> </div> </body> </html>`
				: ""
		}
	`;

	// Define the email options
	const mailOptions = {
		from: `"Hamid Shawon" <${process.env.EMAIL}>`,
		to: recipientEmail,
		subject: `
		${
			isForm === "partner-program"
				? "Thank you for your interest in our client referral Partner Program!"
				: isForm === "pricing"
				? "Thank you for requesting your Free Marketing Plan!"
				: isForm === "contact"
				? "Thank you for contacting Escape Room Marketer"
				: isForm === "free-marketing"
				? "Thank you for requesting your Free Marketing Plan!"
				: ""
		}
	  `,
		html: autoReplyMessage,
	};

	try {
		// Send the auto-reply email
		await transporter.sendMail(mailOptions);
		console.log("Auto-reply sent successfully");
	} catch (error) {
		console.error("Error sending auto-reply:", error);
	}
};

export async function POST(req) {
	try {

		const { data, subject, form } = await req.json();
      

		let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASS,
			},
		});

		let mailOptions = {
			from: `"Hamid Shawon" <${data.email}>`, // sender address
			to: process.env.EMAIL, // list of receivers
			replyTo: data.email,
			subject: subject, // Subject line
			...generateEmail(data),
			bcc: ["theshakil53@gmail.com"],
		};

		transporter.sendMail(mailOptions, function (err, info) {
			if (err) {
				console.log(err);
			} else {
				console.log(info);
			}
		});

		await sendAutoReply(data.email, form, data.name);

		return new Response(JSON.stringify({ success: true, message: "Email sent successfully" }), { status: 200 });
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response(JSON.stringify({ success: false, message: "Failed to send email" }), { status: 500 });
	}

	// try {
	// 	await transporter.sendMail({
	// 		...mailOptions,
	// 		// // to:process.env.
	// 		// // from: data.email,
	// 		...generateEmail(data),
	// 		subject: subject,
	// 	});
	// } catch (error) {
	// 	console.log(error);
	// 	return res.status(400).json({ message: "Bad Request!" });
	// }
}

