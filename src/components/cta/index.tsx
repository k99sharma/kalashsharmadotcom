// imports
import { Button, Form, Input, message, type FormProps } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { FiMessageCircle } from "react-icons/fi";
import { TbMessageCircleFilled } from "react-icons/tb";

type FieldType = {
  name: string;
  message: string;
};

const Cta = () => {
  const [form] = useForm();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);

    message.success("Message Sent!");

    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    message.error("Failed to sent message!");
    console.log(errorInfo.message);
  };

  return (
    <Form
      form={form}
      name="cta"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="cta p-3 flex flex-col md:flex-row w-full">
        <div className="w-full md:w-2/5">
          <div className="cta__header flex justify-start items-center mb-3">
            <div className="cta__header__logo">
              <FiMessageCircle className="h-5 w-5" />
            </div>

            <div className="cta__header__title text-sm ml-2 font-semibold">
              Quick Message
            </div>
          </div>

          <div className="cta__subheader text-sm text-neutral-600 mb-5">
            Prefer to send a direct message?
          </div>

          <div className="cta__submit hidden md:block">
            <Form.Item label={null}>
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
          <div className="cta__form__name mb-2">
            <Form.Item<FieldType>
              name="name"
              rules={[{ required: true, message: "Name is mandatory field." }]}
            >
              <Input type="text" placeholder="Your name" />
            </Form.Item>
          </div>

          <div className="cta__form__message">
            <Form.Item<FieldType>
              name="message"
              rules={[
                { required: true, message: "Message is mandatory field." },
              ]}
            >
              <TextArea
                placeholder="Your message"
                count={{
                  show: true,
                  max: 500,
                }}
                rows={4}
                allowClear
              />
            </Form.Item>
          </div>

          <div className="cta__submit md:hidden">
            <Form.Item label={null}>
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
  );
};

export default Cta;
