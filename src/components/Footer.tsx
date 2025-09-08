export const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Personal AI Chef. Feito com ❤️ para amantes da culinária.
        </p>
      </div>
    </footer>
  );
};