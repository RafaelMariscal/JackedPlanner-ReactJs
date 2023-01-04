import { SplitInfoProps } from "./ModalForm";

interface SplitNameInputProps {
  label: string
  splitTitle: string | undefined
  setSplitsInfo: React.Dispatch<React.SetStateAction<SplitInfoProps[]>>
}
export function SplitNameInput({ label, splitTitle, setSplitsInfo }: SplitNameInputProps) {
  function handleSplitInfoChanges(value: string) {
    setSplitsInfo(prev => {
      const updatedSplitInfo = [...prev];
      return updatedSplitInfo.map(info => {
        if (info.label === label) {
          return { ...info, splitTitle: value };
        } else {
          return info;
        }
      });
    });
    return;
  }
  return (
    <label>
      <span className="ml-1">
        Name for split
        <span className="text-orange-500 font-medium">
          {` "${label}" `}
        </span>
        :
      </span>
      <input
        type="text"
        placeholder="Split name..."
        className="pl-4"
        value={splitTitle}
        // onChange={(e) => setSplitName(e.target.value)}
        onChange={(e) => handleSplitInfoChanges(e.target.value)}
        required
      />
    </label>
  );
}
