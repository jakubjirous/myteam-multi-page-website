import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

enum Msg {
	REQUIRED = "This field is required",
	EMAIL = "Please use a valid email address",
}

const schema = yup
	.object({
		name: yup.string().required(Msg.REQUIRED),
		email: yup.string().required(Msg.REQUIRED).email(Msg.EMAIL),
		company: yup.string().nullable(),
		title: yup.string().nullable(),
		message: yup.string().required(Msg.REQUIRED),
	})
	.required();

type IFormValues = yup.InferType<typeof schema>;

export const Form = () => {
	const [success, setSuccess] = useState<string>();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormValues>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (values: IFormValues) => {
		setSuccess(`Thank you for reaching out to us,\n ${values.name}!`);
	};

	const handleRetry = () => {
		reset();
		setSuccess(undefined);
	};

	const inputClasses = (isError: boolean) =>
		`peer block w-full px-5 bg-transparent border-0 border-b-2 text-15 leading-6 appearance-none focus:outline-none focus:ring-0 ${
			isError
				? "text-white border-flory/60 focus:text-white focus:border-flory"
				: "text-white/60 border-white/60 focus:text-white focus:border-baked"
		}`;

	const labelClasses = (isError: boolean) =>
		`text-15 absolute duration-300 transform -translate-y-6 top-3 left-5 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:left-5 ${
			isError
				? "text-flory/60 peer-focus:text-flory"
				: "text-white/60 peer-focus:text-white"
		}`;

	const errorClasses = "px-5 pt-2 text-flory text-10 font-bold italic";

	return !!success ? (
		<div className="w-full max-w-[540px] mx-auto flex flex-col items-center gap-8 desktop:mt-4 desktop:h-full desktop:justify-center">
			<h2 className="h2 text-white text-center">{success}</h2>

			<p className="body2 text-white text-center">
				Your message has been successfully sent through our contact form. We
				appreciate your interest and will respond to your inquiry as soon as
				possible. Have a great day!
			</p>

			<button onClick={handleRetry} className="btn-secondary">
				Send another message
			</button>
		</div>
	) : (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="w-full max-w-[540px] mx-auto flex flex-col gap-8"
		>
			<div>
				<div className="relative z-0">
					<input
						type="text"
						id="name"
						aria-describedby="name_error"
						className={inputClasses(!!errors.name)}
						placeholder=" "
						aria-invalid={errors.name ? "true" : "false"}
						{...register("name")}
					/>
					<label htmlFor="name" className={labelClasses(!!errors.name)}>
						Name
					</label>
				</div>
				{errors.name && (
					<p id="name_error" className={errorClasses}>
						{errors.name.message}
					</p>
				)}
			</div>

			<div>
				<div className="relative z-0">
					<input
						type="email"
						id="email"
						aria-describedby="email_error"
						className={inputClasses(!!errors.email)}
						placeholder=" "
						aria-invalid={errors.email ? "true" : "false"}
						{...register("email")}
					/>
					<label htmlFor="email" className={labelClasses(!!errors.email)}>
						E-mail
					</label>
				</div>
				{errors.email && (
					<p id="email_error" className={errorClasses}>
						{errors.email.message}
					</p>
				)}
			</div>

			<div>
				<div className="relative z-0">
					<input
						type="text"
						id="company"
						aria-describedby="company_error"
						className={inputClasses(!!errors.company)}
						placeholder=" "
						aria-invalid={errors.company ? "true" : "false"}
						{...register("company")}
					/>
					<label htmlFor="company" className={labelClasses(!!errors.company)}>
						Company
					</label>
				</div>
				{errors.company && (
					<p id="company_error" className={errorClasses}>
						{errors.company.message}
					</p>
				)}
			</div>

			<div>
				<div className="relative z-0">
					<input
						type="text"
						id="title"
						aria-describedby="title_error"
						className={inputClasses(!!errors.title)}
						placeholder=" "
						aria-invalid={errors.title ? "true" : "false"}
						{...register("title")}
					/>
					<label htmlFor="title" className={labelClasses(!!errors.title)}>
						Title
					</label>
				</div>
				{errors.title && (
					<p id="title_error" className={errorClasses}>
						{errors.title.message}
					</p>
				)}
			</div>

			<div>
				<div className="relative z-0">
					<textarea
						id="message"
						aria-describedby="message_error"
						className={`${inputClasses(!!errors.message)} min-h-[7.2rem]`}
						placeholder=" "
						aria-invalid={errors.message ? "true" : "false"}
						rows={4}
						{...register("message")}
					/>
					<label htmlFor="message" className={labelClasses(!!errors.message)}>
						Message
					</label>
				</div>
				{errors.message && (
					<p id="message_error" className={errorClasses}>
						{errors.message.message}
					</p>
				)}
			</div>

			<button className="btn-secondary w-fit">Submit</button>
		</form>
	);
};
