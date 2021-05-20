import React, { useState } from "react";
import { useForm } from "react-hook-form";

const inputRadio = [
  {
    value: "Liên hệ dự án",
  },
  {
    value: "Liên hệ hợp tác",
  },
  {
    value: "Liên hệ báo chí",
  },
  {
    value: "Liên hệ khác",
  },
];

interface IFormInput {
  subjectQuestions: string;
  company: string;
  fullName: string;
  email: string;
  phone: number;
  contactContent: string;
}

const ContactField: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = (data: IFormInput) => alert(JSON.stringify(data));

  const [disableSubmit, setDisableSubmit] = useState(true);
  // const [fieldGroup, setFieldGroup] = useState({
  //   fieldCheck: "",
  //   company: "",
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   textAreaValue: "",
  // });

  return (
    <div className="main-form mx-auto w-full max-w-4xl bg-white mt-4 px-20 pt-6 pb-8">
      <h4 className="font-bold text-2xl text-yellow-500 text-center pb-10">
        Chúng tôi sẵn sàng giải đáp mọi câu hỏi của quý khách
      </h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <span>
            Chủ đề câu hỏi <span className="text-red-500">*</span>
          </span>
          <div className="mt-3 flex justify-between">
            {inputRadio.map((data, index) => (
              <div key={index} className="flex items-center subject-question">
                <input
                  {...register("subjectQuestions", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  className="w-6 h-6 hidden"
                  type="radio"
                  name="name_contact"
                  id={`nameContact${index}`}
                  value={data.value}
                  // onChange={(event) => {
                  //   setFieldGroup({
                  //     ...fieldGroup,
                  //     fieldCheck: event.target.value,
                  //   });
                  // }}
                />
                <label
                  htmlFor={`nameContact${index}`}
                  className="pl-2 label-subject-question"
                >
                  {data.value}
                </label>
              </div>
            ))}
          </div>
          {errors.subjectQuestions && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subjectQuestions.message}
            </p>
          )}
        </section>
        <section className="flex my-6 space-x-4">
          <div className="w-1/2">
            <div>
              Tên công ty <span className="text-red-500">*</span>
            </div>
            <input
              {...register("company", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                maxLength: {
                  value: 20,
                  message: "First name cannot exceed 20 characters",
                },
              })}
              className="w-full h-10 border-gray-400 border mt-3"
              type="text"
              // value={fieldGroup.company}
              // name="company"
              // onChange={(event) => {
              //   setFieldGroup({
              //     ...fieldGroup,
              //     [event.target.name]: event.target.value,
              //   });
              // }}
            />
            {errors?.company && (
              <p className="text-red-500 text-sm mt-1">
                {errors.company.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <div>
              Họ tên <span className="text-red-500">*</span>
            </div>
            <input
              {...register("fullName", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value:
                    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
                  message: "Full name is not valid",
                },
              })}
              className="w-full h-10 border-gray-400 border mt-3"
              type="text"
              // value={fieldGroup.fullName}
              // name="fullName"
              // onChange={(event) => {
              //   setFieldGroup({
              //     ...fieldGroup,
              //     [event.target.name]: event.target.value,
              //   });
              // }}
            />
            {errors?.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </p>
            )}
          </div>
        </section>
        <section className="flex my-6 space-x-4">
          <div className="w-1/2">
            <div>
              E-mail <span className="text-red-500">*</span>
            </div>
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Email is not valid",
                },
              })}
              className="w-full h-10 border-gray-400 border mt-3 px-3"
              // value={fieldGroup.email}
              // onChange={(event) => {
              //   setFieldGroup({
              //     ...fieldGroup,
              //     [event.target.name]: event.target.value,
              //   });
              // }}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <div>
              Số điện thoại <span className="text-red-500">*</span>
            </div>
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "This field is required",
                },
                pattern: {
                  value: /([+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
                  message: "Entered value does not match phone number format",
                },
              })}
              className="w-full h-10 border-gray-400 border mt-3"
              type="text"
              // value={fieldGroup.phone}
              // onChange={(event) => {
              //   setFieldGroup({
              //     ...fieldGroup,
              //     [event.target.name]: event.target.value,
              //   });
              // }}
            />
            {errors?.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
        </section>
        <section className="my-6">
          <div>
            Nội dung liên hệ <span className="text-red-500">*</span>
          </div>
          <textarea
            {...register("contactContent", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            className="w-full border-gray-400 border mt-3"
            cols={30}
            rows={7}
            // value={fieldGroup.textAreaValue}
            // onChange={(event) => {
            //   setFieldGroup({
            //     ...fieldGroup,
            //     textAreaValue: event.target.value,
            //   });
            // }}
          />
          {errors?.contactContent && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactContent.message}
            </p>
          )}
        </section>
        <div className="flex items-center">
          <input
            className="mr-2 w-6 h-6"
            type="checkbox"
            id="confirmRule"
            onChange={() => setDisableSubmit(!disableSubmit)}
          />
          <label htmlFor="confirmRule">
            Tôi đồng ý cung cấp thông tin theo chính sách bảo mật của AMELA.
          </label>
        </div>
        <div className="flex justify-center mt-10">
          <button
            disabled={disableSubmit}
            type="submit"
            className={
              "bg-yellow-500 px-10 py-4 focus:outline-none rounded-3xl text-white font-bold flex items-center transition transform duration-150 " +
              (disableSubmit ? "opacity-50 cursor-not-allowed" : "")
            }
            // onClick={(event) => {
            //   event.preventDefault();
            //   localStorage.setItem("dataSend", JSON.stringify(fieldGroup));
            // }}>
          >
            <span className="pr-2">Gửi liên hệ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactField;
