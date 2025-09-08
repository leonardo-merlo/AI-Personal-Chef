import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChefHat, Sparkles, Clock, Users } from "lucide-react";

export const RecipeChat = () => {
  const [userInput, setUserInput] = useState("");
  const [recipe, setRecipe] = useState(`# Risotto de Cogumelos Especial

## Prato Principal - Sofisticado e Cremoso

**Tempo de preparo:** 35 minutos  
**Porções:** 4 pessoas  
**Dificuldade:** Intermediário

### Ingredientes:
- 2 xícaras de arroz arbório
- 300g de cogumelos Paris frescos
- 1 litro de caldo de legumes quente
- 1 cebola média picada
- 3 dentes de alho picados
- 1/2 xícara de vinho branco seco
- 100g de queijo parmesão ralado
- 2 colheres de sopa de manteiga
- 3 colheres de sopa de azeite extra virgem
- Sal e pimenta-do-reino moída na hora
- Salsinha fresca picada para finalizar

### Modo de preparo:
1. **Prepare o mise en place:** Corte os cogumelos em fatias, pique a cebola e o alho. Mantenha o caldo quente em panela separada.

2. **Refogue os cogumelos:** Em uma frigideira, aqueça 1 colher de azeite e doure os cogumelos até ficarem dourados. Reserve.

3. **Inicie o risotto:** Na panela do risotto, aqueça o azeite restante e refogue a cebola até ficar translúcida. Adicione o alho e refogue por mais 1 minuto.

4. **Toste o arroz:** Adicione o arroz e mexa por 2 minutos para "nacarar" os grãos.

5. **Deglaceie:** Adicione o vinho branco e mexa até evaporar o álcool.

6. **Cozimento cremoso:** Adicione o caldo quente uma concha de cada vez, mexendo sempre, até o arroz ficar al dente (cerca de 18-20 minutos).

7. **Finalização:** Incorpore os cogumelos reservados, a manteiga, o parmesão e tempere com sal e pimenta.

8. **Apresentação:** Sirva imediatamente polvilhado com salsinha fresca.

**Dica do chef:** O segredo do risotto perfeito está na paciência e no mexer constante. O arroz deve soltar amido gradualmente para criar a cremosidade característica!

**Harmonização:** Acompanha perfeitamente com um vinho branco Chardonnay ou Pinot Grigio.`);
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