import { ChefHat } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-hero rounded-xl shadow-medium">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            🍳 Personal AI Chef
          </h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Seu assistente culinário inteligente que cria receitas personalizadas baseadas em seus ingredientes e preferências
        </p>
      </div>
    </header>
  );
};