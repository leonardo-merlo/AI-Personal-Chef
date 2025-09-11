# 🍳 AI Chef Craft

A modern, intelligent recipe generator powered by AI that creates personalized recipes based on your ingredients, dietary preferences, and cravings.

## ✨ Features

- 🤖 **AI-Powered Recipe Generation**: Get personalized recipes based on your input
- 🎨 **Modern UI/UX**: Beautiful, responsive design with smooth animations
- 📱 **Mobile-First**: Optimized for all device sizes
- 🍽️ **Detailed Recipe Cards**: Complete with ingredients, instructions, cooking time, and difficulty
- 🏷️ **Dietary Tags**: Visual badges for dietary preferences and restrictions
- ⚡ **Real-time Processing**: Fast recipe generation via n8n automation
- 🌐 **Multi-language Support**: English interface with international recipe data

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Lucide React** - Modern icon library

### Backend Integration
- **n8n** - Workflow automation platform
- **Spoonacular API** - Recipe and food data provider
- **Webhook Integration** - Real-time data processing

## 📖 How to Use

### Basic Usage

1. **Enter Your Preferences**
   - Describe what you want to cook
   - List available ingredients
   - Mention dietary restrictions or preferences
   - Example: "I have chicken, broccoli, and cheese. I want something healthy for dinner..."

2. **Generate Recipe**
   - Click the "Generate Recipe" button
   - Wait for the AI to process your request
   - View your personalized recipe card

3. **Explore Your Recipe**
   - View the recipe image
   - Check cooking time, servings, and difficulty
   - Review ingredients list
   - Follow step-by-step instructions
   - See dietary tags if applicable

### n8n Workflow Setup

The app integrates with n8n for recipe processing. Ensure your n8n workflow:

1. **Accepts POST requests** with `userInput` parameter
2. **Processes the input** through Spoonacular API
3. **Returns structured data** with the following fields:
   - `title` - Recipe name
   - `image` - Recipe image URL
   - `readyInMinutes` - Cooking time
   - `servings` - Number of servings
   - `extendedIngredients` - Array of ingredients with name, amount, unit
   - `instructions` - Cooking instructions (string or structured)
   - `diets` - Array of dietary tags

---

**Made with ❤️ by the AI Chef Craft team**

*Transform your cooking experience with AI-powered recipe generation!*