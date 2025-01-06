export default function DateTimePicker({ date, time }) {
  return (
    <div className="bg-white rounded-lg p-3 text-black">
      <div className="text-lg font-medium">{time}</div>
      <div className="text-sm text-muted-foreground">{date}</div>
    </div>
  );
}
