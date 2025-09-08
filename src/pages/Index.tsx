import { Header } from "@/components/Header";
import { RecipeChat } from "@/components/RecipeChat";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Header />
        <main className="pb-16">
          <RecipeChat />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
