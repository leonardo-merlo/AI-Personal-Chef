import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Sparkles, Clock, Users } from "lucide-react";
import risottoImage from "@/assets/risotto-example.jpg";

export const RecipeChat = () => {
  const [userInput, setUserInput] = useState("");
  const [recipe, setRecipe] = useState({
    title: "Risotto de Cogumelos Especial",
    subtitle: "Prato Principal - Sofisticado e Cremoso",
    image: risottoImage,
    prepTime: "35 minutos",
    servings: "4 pessoas",
    difficulty: "Intermediário",
    ingredients: [
      "2 xícaras de arroz arbório",
      "300g de cogumelos Paris frescos",
      "1 litro de caldo de legumes quente",
      "1 cebola média picada",
      "3 dentes de alho picados",
      "1/2 xícara de vinho branco seco",
      "100g de queijo parmesão ralado",
      "2 colheres de sopa de manteiga",
      "3 colheres de sopa de azeite extra virgem",
      "Sal e pimenta-do-reino moída na hora",
      "Salsinha fresca picada para finalizar"
    ],
    instructions: [
      {
        title: "Prepare o mise en place:",
        content: "Corte os cogumelos em fatias, pique a cebola e o alho. Mantenha o caldo quente em panela separada."
      },
      {
        title: "Refogue os cogumelos:",
        content: "Em uma frigideira, aqueça 1 colher de azeite e doure os cogumelos até ficarem dourados. Reserve."
      },
      {
        title: "Inicie o risotto:",
        content: "Na panela do risotto, aqueça o azeite restante e refogue a cebola até ficar translúcida. Adicione o alho e refogue por mais 1 minuto."
      },
      {
        title: "Toste o arroz:",
        content: "Adicione o arroz e mexa por 2 minutos para \"nacarar\" os grãos."
      },
      {
        title: "Deglaceie:",
        content: "Adicione o vinho branco e mexa até evaporar o álcool."
      },
      {
        title: "Cozimento cremoso:",
        content: "Adicione o caldo quente uma concha de cada vez, mexendo sempre, até o arroz ficar al dente (cerca de 18-20 minutos)."
      },
      {
        title: "Finalização:",
        content: "Incorpore os cogumelos reservados, a manteiga, o parmesão e tempere com sal e pimenta."
      },
      {
        title: "Apresentação:",
        content: "Sirva imediatamente polvilhado com salsinha fresca."
      }
    ],
    tip: "O segredo do risotto perfeito está na paciência e no mexer constante. O arroz deve soltar amido gradualmente para criar a cremosidade característica!",
    pairing: "Acompanha perfeitamente com um vinho branco Chardonnay ou Pinot Grigio."
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecipe = async () => {
    if (!userInput.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call - replace with your n8n backend call
    try {
      // TODO: Replace with actual API call to your n8n backend
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading
      
      // Mock response for demonstration
      const mockRecipe = {
        title: userInput.includes("massa") ? "Massa Especial" : "Prato Delicioso",
        subtitle: "Receita personalizada baseada nos seus ingredientes",
        image: risottoImage,
        prepTime: "30 minutos",
        servings: "4 pessoas",
        difficulty: "Fácil",
        ingredients: [
          "2 xícaras de ingrediente principal",
          "1 cebola média",
          "2 dentes de alho",
          "Sal e pimenta a gosto",
          "Azeite de oliva"
        ],
        instructions: [
          {
            title: "Prepare os ingredientes:",
            content: "Corte todos os ingredientes em pedaços uniformes."
          },
          {
            title: "Refogue:",
            content: "Aqueça o azeite e refogue a cebola e o alho até dourar."
          },
          {
            title: "Adicione o principal:",
            content: "Coloque o ingrediente principal e tempere."
          },
          {
            title: "Finalize:",
            content: "Cozinhe por 20 minutos em fogo médio e sirva quente."
          }
        ],
        tip: "Experimente adicionar ervas frescas para realçar o sabor!",
        pairing: "Acompanha bem com uma salada fresca."
      };
      
      setRecipe(mockRecipe);
    } catch (error) {
      console.error("Erro ao gerar receita:", error);
      // Reset to null on error
      setRecipe(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <Card className="overflow-hidden">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Sparkles className="w-6 h-6" />
                <h2 className="text-2xl font-bold">O que você gostaria de comer hoje?</h2>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Descreva seus ingredientes, restrições alimentares, preferências ou simplesmente o que está com vontade de comer. 
                Nosso chef virtual criará uma receita personalizada para você!
              </p>
            </div>
            
            <div className="space-y-4">
              <Textarea
                placeholder="Ex: Tenho frango, brócolis e queijo. Quero algo saudável para o jantar..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="min-h-[140px] text-base"
              />
              
              <div className="flex justify-center">
                <Button
                  onClick={handleGenerateRecipe}
                  disabled={!userInput.trim() || isLoading}
                  variant="chef"
                  size="lg"
                  className="px-8 py-3 text-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                      Criando sua receita...
                    </>
                  ) : (
                    <>
                      <ChefHat className="w-5 h-5" />
                      Gerar Receita
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recipe Display */}
      {recipe && (
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            {/* Recipe Image */}
            <div className="w-full h-64 overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <ChefHat className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sua Receita Personalizada</h3>
                  <p className="text-sm text-muted-foreground">Criada especialmente para você</p>
                </div>
              </div>
              
              {/* Recipe Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">{recipe.title}</h2>
                  <p className="text-lg text-muted-foreground font-medium">{recipe.subtitle}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Tempo</p>
                    <p className="font-bold">{recipe.prepTime}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Porções</p>
                    <p className="font-bold">{recipe.servings}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Dificuldade</p>
                    <p className="font-bold">{recipe.difficulty}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Ingredientes:</h3>
                  <ul className="space-y-1">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary font-medium">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Modo de preparo:</h3>
                  <ol className="space-y-3">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <div>
                          <span className="font-bold">{step.title}</span> {step.content}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                  <p className="font-bold text-accent mb-1">Dica do chef:</p>
                  <p className="text-sm">{recipe.tip}</p>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-bold text-primary mb-1">Harmonização:</p>
                  <p className="text-sm">{recipe.pairing}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>{recipe.servings}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4" />
                  <span>Personalizada</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};