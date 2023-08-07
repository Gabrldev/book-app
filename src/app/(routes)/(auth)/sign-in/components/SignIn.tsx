import AuthForm from "@/components/AuthForm";

const SignIn = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Bienvenido a BookApp</h1>
      <p className="text-sm max-w-xs mx-auto">
        Inicia session para poder continuar con el uso de la aplicacion.
      </p>
      </div>

      <AuthForm />
    </div>
  );
};
export default SignIn;
