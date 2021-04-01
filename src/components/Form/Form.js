import React from "react";

export const Form = () => {
	return (
		<div>
			<h1>Form </h1>
			<p>
				There are form fields listed below and form validation is also styled.
			</p>
			<hr />
			<h4>Example of Active form fields</h4>

			<p>
				Add form-label class to labels and form-fieldfor input element,
				form-field, form-textareafor textarea element(mulitple lines input). Add
				form-label-required-field class to labels if the field is required, it
				will show star on the field
			</p>
			<div className="flex">
				<label className="form-label form-label-required-field">
					Email address:
				</label>
				<input
					type="text"
					className="form-field"
					placeholder="name@example.com"
					required
				/>
				<div className="error-text">Email should contain @</div>

				<label className="form-label form-label-required-field" for="country">
					Country
				</label>
				<select id="country" name="country">
					<option value="australia">Australia</option>
					<option value="canada">Canada</option>
					<option value="usa">USA</option>
				</select>
				<label className="form-label form-label-required-field">
					Disabled Input:
				</label>
				<input
					type="text"
					className="form-field"
					placeholder="Disabled input"
					disabled
				/>
				<label className="form-label form-label-required-field">
					Disabled Input:
				</label>
				<input
					type="text"
					className="form-field"
					placeholder="Disabled read only"
					disabled
					readOnly
				/>
				<div className="error-text">*read-only</div>
				<hr />
			</div>
		</div>
	);
};
