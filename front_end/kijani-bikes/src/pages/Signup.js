import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import MainNavigation from "../components/layout/MainNavigation";
import SignupForm from "../components/signUpForm";

function Signup() {
  return (
    <section>
      <MainNavigation />
      <Hero />
      {/* <SignupForm /> */}
      <SignupForm />
      <Footer />
    </section>
  );
}

export default Signup;
