import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

// Define the validation schema
const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  // Initialize useForm with the schema and options
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur", // Validate on blur
    defaultValues,
    reValidateMode: "onChange", // Re-validate on every change
  });

  // Handle form submission
  const onSubmit = (data: IFormLogin) => {
    console.log("Form Data:", data);
    // Add your login logic here (e.g., API call)
  };

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          {/* Email Input */}
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          {/* Password Input */}
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          {/* Login Button */}
          <Button
            title="Entrar"
            onClick={handleSubmit(onSubmit)} // Pass the submit handler
            disabled={!isValid} // Disable the button if the form is invalid
          />
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;