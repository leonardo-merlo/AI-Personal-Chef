export const Footer = () => {
  return (
    <footer className="w-full py-8 mt-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground text-white">
          © {new Date().getFullYear()} Personal AI Chef. Made with ❤️ for cooking lovers.
        </p>
      </div>
    </footer>
  );
};