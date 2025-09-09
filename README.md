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

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd ai-chef-craft
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application.

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

### Advanced Features

- **Dietary Preferences**: The app automatically detects and displays dietary tags (vegetarian, vegan, gluten-free, etc.)
- **Smart Ingredient Parsing**: Automatically formats ingredient amounts and units
- **Difficulty Assessment**: AI calculates recipe difficulty based on cooking time
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# n8n Webhook URL (if using custom endpoint)
VITE_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/your-webhook-id

# API Configuration
VITE_API_TIMEOUT=30000
```

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

## 📁 Project Structure

```
ai-chef-craft/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Header.tsx     # App header
│   │   ├── Footer.tsx     # App footer
│   │   └── RecipeChat.tsx # Main recipe component
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── assets/            # Images and static files
│   └── main.tsx           # App entry point
├── tailwind.config.ts     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Styling

The app uses Tailwind CSS for styling. Key customization points:

- **Colors**: Modify `tailwind.config.ts` for brand colors
- **Components**: Customize shadcn/ui components in `src/components/ui/`
- **Layout**: Adjust spacing and layout in component files

### Adding New Features

1. **New Recipe Fields**: Update the `Recipe` type in `RecipeChat.tsx`
2. **Additional APIs**: Extend the webhook integration
3. **UI Components**: Add new shadcn/ui components as needed

## 🚀 Deployment

### Lovable Platform

1. Open your [Lovable Project](https://lovable.dev/projects/b1cd1950-5120-4545-82b5-3a7958217671)
2. Click **Share → Publish**
3. Your app will be live instantly

### Custom Domain

1. Navigate to **Project → Settings → Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration instructions

### Other Platforms

The app can be deployed to any platform that supports React:

- **Vercel**: `npm run build && vercel --prod`
- **Netlify**: `npm run build && netlify deploy --prod --dir=dist`
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Open an issue on GitHub for bugs or feature requests
- **Community**: Join our discussions for help and ideas

## 🙏 Acknowledgments

- **Spoonacular API** for recipe data
- **n8n** for workflow automation
- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for utility-first styling
- **Lovable** for the development platform

---

**Made with ❤️ by the AI Chef Craft team**

*Transform your cooking experience with AI-powered recipe generation!*