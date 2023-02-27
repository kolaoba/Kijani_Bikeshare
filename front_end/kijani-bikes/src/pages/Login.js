import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import MainNavigation from "../components/layout/MainNavigation";
import LoginForm from "../components/loginForm";
import Api from "./TestApi";

function Login() {
  return (
    <section>
      <MainNavigation />
      <Hero />
      <LoginForm />
      <Footer />
      <Api />
    </section>
  );
}

export default Login;
