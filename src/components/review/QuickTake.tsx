interface QuickTakeProps {
  quickTake: string;
}

export const QuickTake = ({ quickTake }: QuickTakeProps) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Take</h2>
      <p className="text-gray-700">{quickTake}</p>
    </div>
  );
};