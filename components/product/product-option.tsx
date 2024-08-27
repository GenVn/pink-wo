"use client";

import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface ProductDetailPageProps {
  id: number;
  name: string;
  isMultiSelect: boolean;
  optionValues: {
    id: number;
    name: string;
    price: number;
    isDefault: boolean;
    isMultiValues: boolean;
  }[];
}
interface OptionValue {
  id: number;
  name: string;
  price: number;
  isDefault: boolean;
  isMultiValues: boolean;
}

export default function ProductOptionSection({
  id,
  name,
  optionValues,
  isMultiSelect,
}: ProductDetailPageProps) {
  const [selectedOption, setSelectedOption] = useState<OptionValue | null>(
    null
  );
  const handleChangeOption = (option: OptionValue) => {
    setSelectedOption(option);
  };
  const findDefault = () => {
    return optionValues.find((option) => option.isDefault);
  };

  const handlePrice = (option: {
    id: number;
    name: string;
    price: number;
    isDefault: boolean;
    isMultiValues: boolean;
  }) => {
    let adjustedPrice = option.price;
    if (selectedOption) {
      if (option.id === selectedOption.id) {
        adjustedPrice = 0;
      } else {
        adjustedPrice = option.price - selectedOption.price;
      }
    } else {
      setSelectedOption(findDefault()!);
    }
    return Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(adjustedPrice);
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <h1 className="text-lg font-bold">{`Chọn ${name}`}</h1>
        {/* <p>{optionDesc}</p> */}
      </div>

      {isMultiSelect ? (
        <div className="flex flex-col gap-4">
          {optionValues.map((value) => (
            <div
              onClick={() => handleChangeOption(value)}
              key={value.name}
              className="flex items-center gap-x-2"
            >
              <Checkbox id={value.name} />
              <Label
                htmlFor={value.name}
                className="inline-flex flex-grow justify-between"
              >
                <span>{value.name}</span>
                <span>{handlePrice(value)}</span>
              </Label>
            </div>
          ))}
        </div>
      ) : (
        <RadioGroup
          className="flex flex-col gap-4"
          defaultValue={findDefault()!.name}
        >
          {optionValues.map((value) => (
            <div
              onClick={() => handleChangeOption(value)}
              key={value.name}
              className="flex items-center gap-2"
            >
              <RadioGroupItem value={value.name} id={value.name} />
              <Label
                htmlFor={value.name}
                className="inline-flex flex-grow justify-between"
              >
                <span>{value.name}</span>
                <span>{handlePrice(value)}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      )}
    </div>
  );
}
