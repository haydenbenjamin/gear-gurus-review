export const Hero = () => {
  return (
    <div className="relative mb-12">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/45491006-8710-4b78-9338-386f1dd4b0c6.png")',
        }}
      />
      <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text readability */}
      <div className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Expert Home Office Gear Reviews
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Find the perfect equipment for your home office setup with our in-depth reviews and recommendations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};