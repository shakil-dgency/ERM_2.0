"use client"
import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const phoneSchema = Yup.object().shape({
	phone: Yup.string().test("isValidPhoneNumber", "Invalid phone number", function (value) {
		if (!value) {
			return true; // Empty value is considered valid to handle optional fields
		}

		// console.log(value);

		try {
			const phone = parsePhoneNumberFromString("+" + value);

			// Check if the phone number is valid
			return phone && phone.isValid();
		} catch (error) {
			return false;
		}
	}),
});