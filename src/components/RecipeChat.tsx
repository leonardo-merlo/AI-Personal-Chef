import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Sparkles, Clock, Users } from "lucide-react";

export const RecipeChat = () => {
  const [userInput, setUserInput] = useState("");
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateRecipe = async () => {
    if (!userInput.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call - replace with your n8n backend call
    try {
      // TODO: Replace with actual API call to your n8n backend
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate loading
      
      // Mock response for demonstration
      const mockRecipe = `# Receita Sugerida

## ${userInput.includes("massa") ? "Massa Especial" : "Prato Delicioso"}

**Tempo de preparo:** 30 minutos  
**Porções:** 4 pessoas

### Ingredientes:
- 2 xícaras de ingrediente principal
- 1 cebola média
- 2 dentes de alho
- Sal e pimenta a gosto
- Azeite de oliva

### Modo de preparo:
1. Prepare os ingredientes básicos
2. Refogue a cebola e o alho no azeite
3. Adicione o ingrediente principal
4. Tempere com sal e pimenta
5. Cozinhe por 20 minutos em fogo médio
6. Sirva quente e aproveite!

**Dica do chef:** Experimente adicionar ervas frescas para realçar o sabor!`;
      
      setRecipe(mockRecipe);
    } catch (error) {
      console.error("Erro ao gerar receita:", error);
      setRecipe("Ops! Houve um erro ao gerar sua receita. Tente novamente.");
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
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <ChefHat className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sua Receita Personalizada</h3>
                  <p className="text-sm text-muted-foreground">Criada especialmente para você</p>
                </div>
              </div>
              
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-foreground leading-relaxed">
                  {recipe}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>30 min</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>4 porções</span>
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