interface QuickTakeProps {
  quickTake: string;
}

export const QuickTake = ({ quickTake }: QuickTakeProps) => {
  return (
    <div className="bg-[#F1F1F1] p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4 text-primary">Quick Take</h2>
      <p className="text-gray-700">{quickTake}</p>
    </div>
  );
};