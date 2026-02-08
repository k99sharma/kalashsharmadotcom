import { Button, Form, Input, message, type FormProps } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { FiMessageCircle } from "react-icons/fi";
import { TbMessageCircleFilled } from "react-icons/tb";

type FieldType = {
  name: string;
  email: string;
  message: string;
};

const Cta = () => {
  const [form] = useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const formData = new FormData();
      formData.append("form-name", "cta");

      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });
      console.log(response);

      if (!response.ok) throw new Error("Form submission failed");

      message.success("Message Sent!");
      form.resetFields();
    } catch (error) {
      message.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <>
      <Form form={form} name="cta" onFinish={onFinish}>
        <div className="cta p-3 flex flex-col md:flex-row w-full">
          <div className="w-full md:w-2/5">
            <div className="cta__header flex justify-start items-center mb-3">
              <FiMessageCircle className="h-5 w-5" />
              <div className="cta__header__title text-sm ml-2 font-semibold">
                Quick Message
              </div>
            </div>

            <div className="cta__subheader text-sm text-neutral-600 mb-5">
              Prefer to send a direct message?
            </div>

            <div className="cta__submit hidden md:block">
              <Form.Item>
                <Button
                  variant="solid"
                  color="default"
                  icon={<TbMessageCircleFilled />}
                  htmlType="submit"
                >
                  Send Message
                </Button>
              </Form.Item>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <Form.Item<FieldType>
              name="name"
              rules={[{ required: true, message: "Name is required" }]}
              className="mb-2"
            >
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item<FieldType>
              name="email"
              rules={[
                { required: true, message: "Email is required" },
                { type: "email", message: "Please enter a valid email" },
              ]}
              className="mb-2"
            >
              <Input placeholder="yourmail@email.com" />
            </Form.Item>

            <Form.Item<FieldType>
              name="message"
              rules={[{ required: true, message: "Message is required" }]}
            >
              <TextArea
                placeholder="Your message"
                count={{ show: true, max: 500 }}
                rows={4}
                allowClear
              />
            </Form.Item>

            <div className="cta__submit md:hidden">
              <Form.Item>
                <Button
                  variant="solid"
                  color="default"
                  icon={<TbMessageCircleFilled />}
                  htmlType="submit"
                >
                  Send Message
                </Button>
              </Form.Item>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Cta;
