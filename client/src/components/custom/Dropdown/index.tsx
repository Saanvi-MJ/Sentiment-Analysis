import { Control, Controller } from "react-hook-form";
import { StatsPayload } from "@/interface";
import SelectModel from "./SelectModel";

function Dropdown({
  control,
  isSubmitting,
}: {
  control: Control<StatsPayload, unknown, StatsPayload>;
  isSubmitting: boolean;
}) {
  return (
    <Controller
      name="modelName"
      control={control}
      render={({ field: { onChange, value } }) => (
        <SelectModel
          isSubmitting={isSubmitting}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
}

export default Dropdown;
