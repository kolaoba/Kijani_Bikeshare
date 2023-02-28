import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import MainNavigation from "../components/layout/MainNavigation";
import LoginForm from "../components/loginForm";

function Login() {
  return (
    <section>
      <MainNavigation />
      <Hero />
      <LoginForm />
      <Footer />
    </section>
  );
}

export default Login;
