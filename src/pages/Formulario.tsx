import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WebhookForm from "@/components/WebhookForm";

const Formulario = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28">
        <WebhookForm />
      </main>
      <Footer />
    </div>
  );
};

export default Formulario;
