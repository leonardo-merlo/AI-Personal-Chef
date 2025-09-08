import chefAvatar from "@/assets/chef-avatar.png";

export const Header = () => {
  return (
    <header className="w-full py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img 
            src={chefAvatar} 
            alt="Chef Avatar" 
            className="w-16 h-16 animate-float"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
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